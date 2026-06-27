#!/usr/bin/env bash
# sync-sdk-docs-local.sh
#
# Mirrors the SDK build + sync that runs inside infra-deploy.yml at build time.
# Builds each SDK from the portal's own API specs, then syncs the generated
# reference docs and code examples into the portal workspace.
#
# Run this before `npm start` whenever the API specs or SDK templates change.
#
# Usage:
#   ./scripts/sync-sdk-docs-local.sh [--sdk go|python|powershell|typescript] [--dry-run] [--skip-build]
#
# With no arguments, all four SDKs are built and synced.
# --sdk <name>    Build and sync only the named SDK.
# --dry-run       Show what rsync would copy without making changes (skips build).
# --skip-build    Skip the SDK build step and only re-run the rsync/overlay.
#
# Prerequisites:
#   brew install rsync
#   java 17+ (for openapi-generator-cli.jar) — brew install openjdk@17
#
# Paths (edit if your clones live elsewhere):
# Resolve portal root relative to this script so it works from any working directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORTAL_ROOT="${PORTAL_ROOT:-$(cd "$SCRIPT_DIR/.." && pwd)}"
SDK_ROOT="${SDK_ROOT:-$PORTAL_ROOT/sdk-repos}"

set -euo pipefail

DRY_RUN=false
ONLY_SDK=""
SKIP_BUILD=false

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run)    DRY_RUN=true; shift ;;
    --skip-build) SKIP_BUILD=true; shift ;;
    --sdk)        ONLY_SDK="$2"; shift 2 ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

APIS_DIR="$PORTAL_ROOT/static/api-specs/idn/apis"

if $DRY_RUN; then
  SKIP_BUILD=true
  echo "--- DRY RUN: build skipped, no files will be modified ---"
fi

RSYNC_FLAGS="-cav --delete"
$DRY_RUN && RSYNC_FLAGS="$RSYNC_FLAGS --dry-run"

# ---------------------------------------------------------------------------
# Build an SDK from the portal's API specs
# ---------------------------------------------------------------------------
build_sdk() {
  local name="$1" sdk_dir="$2"
  if $SKIP_BUILD; then
    echo "  [skip-build] skipping $name SDK build"
    return
  fi
  echo ""
  echo "=== Building $name SDK from $APIS_DIR ==="
  if [ ! -d "$sdk_dir" ]; then
    echo "  SKIP: $sdk_dir does not exist."
    return
  fi

  local jar="$sdk_dir/openapi-generator-cli.jar"
  if [ ! -f "$jar" ]; then
    echo "  Downloading openapi-generator-cli.jar..."
    curl -sSL "https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/7.12.0/openapi-generator-cli-7.12.0.jar" -o "$jar"
  fi

  (
    cd "$sdk_dir"
    if [ ! -d node_modules ]; then
      echo "  Installing dependencies..."
      npm ci --ignore-scripts
    fi
    node sdk-resources/build-versioned-sdk.js "$APIS_DIR" --concurrency "$(nproc)"
  )
}

run_rsync() {
  if $DRY_RUN; then
    echo "[dry-run] rsync $RSYNC_FLAGS $*"
  else
    rsync $RSYNC_FLAGS "$@"
  fi
}

write_file() {
  local dest="$1"; shift
  if $DRY_RUN; then
    echo "[dry-run] cat ... > $dest"
  else
    mkdir -p "$(dirname "$dest")"
    cat "$@" > "$dest"
    echo "Written: $dest"
  fi
}

# Classify a partition directory name into "idn", "nerm", or "skip".
# Each SDK passes its own exclusion lists since naming conventions differ.
classify_partition() {
  local resource="$1"; shift
  # Remaining args are nerm partition names for this SDK
  local nerm_list=("$@")
  for n in "${nerm_list[@]}"; do
    [ "$resource" = "$n" ] && echo "nerm" && return
  done
  # Go generic partition has wildcard paths — not useful in the portal
  [ "$resource" = "generic" ] && echo "skip" && return
  # Python intelligence_package has no corresponding portal spec
  [ "$resource" = "intelligence_package" ] && echo "skip" && return
  echo "idn"
}

# ---------------------------------------------------------------------------
# Shared sync logic
# ---------------------------------------------------------------------------
sync_sdk() {
  local lang="$1"        # go | python | powershell | typescript
  local src="$2"         # path to partition root dir
  local ref_dest="$3"    # portal docs/tools/sdk/<lang>/Reference
  local overlay_name="$4" # e.g. go_code_examples_overlay.yaml
  shift 4
  local nerm_partitions=("$@")

  local idn_overlays=()
  local nerm_overlays=()

  for partition_dir in "$src"/*/; do
    [ -d "$partition_dir/docs/Methods" ] || continue
    resource=$(basename "$partition_dir")
    target=$(classify_partition "$resource" "${nerm_partitions[@]}")

    # Non-IDN partitions: collect NERM overlays but don't sync reference docs here
    if [ "$target" = "skip" ] || [ "$target" = "nerm" ]; then
      echo "  -> $resource [$target — skipping reference docs]"
      local overlay="$partition_dir/docs/Examples/${overlay_name}"
      [ "$target" = "nerm" ] && [ -f "$overlay" ] && nerm_overlays+=("$overlay")
      continue
    fi

    echo "  -> $resource [$target]"
    run_rsync "$partition_dir/docs/Methods" "$ref_dest/$resource"
    run_rsync "$partition_dir/docs/Models"  "$ref_dest/$resource"

    local overlay="$partition_dir/docs/Examples/${overlay_name}"
    [ -f "$overlay" ] && idn_overlays+=("$overlay")
  done

  if [ ${#idn_overlays[@]} -gt 0 ]; then
    write_file "$PORTAL_ROOT/static/code-examples/v1/${overlay_name}" "${idn_overlays[@]}"
  fi
  if [ ${#nerm_overlays[@]} -gt 0 ]; then
    write_file "$PORTAL_ROOT/static/code-examples/nerm/${overlay_name}" "${nerm_overlays[@]}"
  fi
}

# ---------------------------------------------------------------------------
# Per-SDK sync functions
# ---------------------------------------------------------------------------
sync_go() {
  build_sdk "Go" "$SDK_ROOT/golang-sdk"
  echo ""
  echo "=== Syncing Go SDK docs ==="
  sync_sdk "go" \
    "$SDK_ROOT/golang-sdk" \
    "$PORTAL_ROOT/docs/tools/sdk/go/Reference" \
    "go_code_examples_overlay.yaml" \
    "nerm" "nerm_v2025"
}

sync_python() {
  build_sdk "Python" "$SDK_ROOT/python-sdk"
  echo ""
  echo "=== Syncing Python SDK docs ==="
  sync_sdk "python" \
    "$SDK_ROOT/python-sdk/sailpoint" \
    "$PORTAL_ROOT/docs/tools/sdk/python/Reference" \
    "python_code_examples_overlay.yaml" \
    "nerm"
}

sync_powershell() {
  build_sdk "PowerShell" "$SDK_ROOT/powershell-sdk"
  echo ""
  echo "=== Syncing PowerShell SDK docs ==="
  sync_sdk "powershell" \
    "$SDK_ROOT/powershell-sdk/PSSailpoint" \
    "$PORTAL_ROOT/docs/tools/sdk/powershell/Reference" \
    "powershell_code_examples_overlay.yaml" \
    "nerm" "nermV2025"
}

sync_typescript() {
  build_sdk "TypeScript" "$SDK_ROOT/typescript-sdk"
  echo ""
  echo "=== Syncing TypeScript SDK docs ==="
  sync_sdk "typescript" \
    "$SDK_ROOT/typescript-sdk/sdk-output" \
    "$PORTAL_ROOT/docs/tools/sdk/typescript/Reference" \
    "typescript_code_examples_overlay.yaml" \
    "nerm" "nerm_v2025"
}

# ---------------------------------------------------------------------------
# Merge & apply code examples overlays
# ---------------------------------------------------------------------------
# ---------------------------------------------------------------------------
# Write _category_.json files with unique keys to prevent Docusaurus
# translation-key conflicts when multiple SDKs share the same category names.
# ---------------------------------------------------------------------------
write_category_files() {
  echo ""
  echo "=== Writing _category_.json files for SDK Reference dirs ==="
  node -e "
const fs = require('fs');
const path = require('path');
const sdkRoot = '$PORTAL_ROOT/docs/tools/sdk';
let count = 0;
function writeCategory(dir, key, label, position) {
  const obj = { label, key };
  if (position != null) obj.position = position;
  fs.writeFileSync(path.join(dir, '_category_.json'), JSON.stringify(obj, null, 2) + '\n');
  count++;
}
const sdks = fs.readdirSync(sdkRoot).filter(d => fs.statSync(path.join(sdkRoot, d)).isDirectory());
for (const sdk of sdks) {
  const refDir = path.join(sdkRoot, sdk, 'Reference');
  if (!fs.existsSync(refDir)) continue;
  writeCategory(refDir, sdk + '-reference', 'Reference', 5);
  for (const entry of fs.readdirSync(refDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const partDir = path.join(refDir, entry.name);
    writeCategory(partDir, sdk + '-' + entry.name, entry.name, null);
    for (const sub of ['Methods', 'Models']) {
      const subDir = path.join(partDir, sub);
      if (fs.existsSync(subDir) && fs.statSync(subDir).isDirectory())
        writeCategory(subDir, sdk + '-' + entry.name + '-' + sub.toLowerCase(), sub, null);
    }
  }
}
console.log('  Created ' + count + ' _category_.json files');
"
}

apply_code_examples() {
  echo ""
  echo "=== Merging and applying IDN (v1) code examples ==="
  cd "$PORTAL_ROOT"
  npm run v1-merge-code-examples
  npm run overlay-code-examples-v1

  echo ""
  echo "=== Merging NERM code examples (overlay not applied - NERM spec uses \$refs) ==="
  npm run nerm-merge-code-examples
  echo "  Note: NERM overlay files are available at static/code-examples/nerm/"
  echo "  Applying them requires a bundled/dereferenced NERM spec."
}

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
case "$ONLY_SDK" in
  go)         sync_go ;;
  python)     sync_python ;;
  powershell) sync_powershell ;;
  typescript) sync_typescript ;;
  "")
    # Run all 4 SDK build+sync pipelines in parallel; print each log block in order when done.
    declare -A SDK_PIDS SDK_LOGS
    for fn in sync_go sync_python sync_powershell sync_typescript; do
      SDK_LOGS[$fn]=$(mktemp)
      $fn >"${SDK_LOGS[$fn]}" 2>&1 &
      SDK_PIDS[$fn]=$!
    done
    FAILED=0
    for fn in sync_go sync_python sync_powershell sync_typescript; do
      set +e; wait "${SDK_PIDS[$fn]}"; RC=$?; set -e
      cat "${SDK_LOGS[$fn]}"
      rm -f "${SDK_LOGS[$fn]}"
      [ $RC -ne 0 ] && { echo "  ✗ $fn FAILED (exit $RC)"; FAILED=1; }
    done
    [ $FAILED -eq 0 ] || { echo "One or more SDK builds/syncs failed"; exit 1; }
    ;;
  *) echo "Unknown SDK: $ONLY_SDK. Choose from: go, python, powershell, typescript"; exit 1 ;;
esac

if ! $DRY_RUN; then
  write_category_files
  apply_code_examples
  echo ""
  echo "Done! Start the portal with:"
  echo "  cd $PORTAL_ROOT && npm start"
fi
