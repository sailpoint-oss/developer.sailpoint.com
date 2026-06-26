#!/usr/bin/env bash
# sync-sdk-docs-local.sh
#
# Simulates all four SDK push workflows locally so you can verify docs before
# merging/pushing to the remote repos.
#
# Usage:
#   ./scripts/sync-sdk-docs-local.sh [--sdk go|python|powershell|typescript] [--dry-run]
#
# With no arguments, all four SDKs are synced.
# --sdk <name>  Sync only the named SDK.
# --dry-run     Show what would be copied/removed without making changes.
#
# Prerequisites:
#   brew install rsync
#   TypeScript SDK must be built first: cd <TS_SDK_ROOT> && make build
#
# Paths (edit if your clones live elsewhere):
SDK_ROOT="${SDK_ROOT:-/Users/philip.ellis/git/ai-assisted-api-spec-generator/api-client-common}"
PORTAL_ROOT="${PORTAL_ROOT:-/Users/philip.ellis/git/developer.sailpoint.com}"

set -euo pipefail

DRY_RUN=false
ONLY_SDK=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run) DRY_RUN=true; shift ;;
    --sdk) ONLY_SDK="$2"; shift 2 ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

RSYNC_FLAGS="-cav --delete"
if $DRY_RUN; then
  RSYNC_FLAGS="$RSYNC_FLAGS --dry-run"
  echo "--- DRY RUN: no files will be modified ---"
fi

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

# ---------------------------------------------------------------------------
# Go SDK
# ---------------------------------------------------------------------------
sync_go() {
  echo ""
  echo "=== Syncing Go SDK docs ==="
  local src="$SDK_ROOT/golang-sdk"
  local ref_dest="$PORTAL_ROOT/docs/tools/sdk/go/Reference"
  local overlay_dest="$PORTAL_ROOT/static/code-examples/v1/go_code_examples_overlay.yaml"

  overlay_files=()
  for partition_dir in "$src"/*/; do
    [ -d "$partition_dir/docs/Methods" ] || continue
    resource=$(basename "$partition_dir")
    echo "  -> $resource"
    run_rsync "$partition_dir/docs/Methods" "$ref_dest/$resource"
    run_rsync "$partition_dir/docs/Models"  "$ref_dest/$resource"
    if [ -f "$partition_dir/docs/Examples/go_code_examples_overlay.yaml" ]; then
      overlay_files+=("$partition_dir/docs/Examples/go_code_examples_overlay.yaml")
    fi
  done

  if [ ${#overlay_files[@]} -gt 0 ]; then
    write_file "$overlay_dest" "${overlay_files[@]}"
  fi
}

# ---------------------------------------------------------------------------
# Python SDK
# ---------------------------------------------------------------------------
sync_python() {
  echo ""
  echo "=== Syncing Python SDK docs ==="
  local src="$SDK_ROOT/python-sdk/sailpoint"
  local ref_dest="$PORTAL_ROOT/docs/tools/sdk/python/Reference"
  local overlay_dest="$PORTAL_ROOT/static/code-examples/v1/python_code_examples_overlay.yaml"

  overlay_files=()
  for partition_dir in "$src"/*/; do
    [ -d "$partition_dir/docs/Methods" ] || continue
    resource=$(basename "$partition_dir")
    echo "  -> $resource"
    run_rsync "$partition_dir/docs/Methods" "$ref_dest/$resource"
    run_rsync "$partition_dir/docs/Models"  "$ref_dest/$resource"
    if [ -f "$partition_dir/docs/Examples/python_code_examples_overlay.yaml" ]; then
      overlay_files+=("$partition_dir/docs/Examples/python_code_examples_overlay.yaml")
    fi
  done

  if [ ${#overlay_files[@]} -gt 0 ]; then
    write_file "$overlay_dest" "${overlay_files[@]}"
  fi
}

# ---------------------------------------------------------------------------
# PowerShell SDK
# ---------------------------------------------------------------------------
sync_powershell() {
  echo ""
  echo "=== Syncing PowerShell SDK docs ==="
  local src="$SDK_ROOT/powershell-sdk/PSSailpoint"
  local ref_dest="$PORTAL_ROOT/docs/tools/sdk/powershell/Reference"
  local overlay_dest="$PORTAL_ROOT/static/code-examples/v1/powershell_code_examples_overlay.yaml"

  overlay_files=()
  for partition_dir in "$src"/*/; do
    [ -d "$partition_dir/docs/Methods" ] || continue
    resource=$(basename "$partition_dir")
    echo "  -> $resource"
    run_rsync "$partition_dir/docs/Methods" "$ref_dest/$resource"
    run_rsync "$partition_dir/docs/Models"  "$ref_dest/$resource"
    if [ -f "$partition_dir/docs/Examples/powershell_code_examples_overlay.yaml" ]; then
      overlay_files+=("$partition_dir/docs/Examples/powershell_code_examples_overlay.yaml")
    fi
  done

  if [ ${#overlay_files[@]} -gt 0 ]; then
    write_file "$overlay_dest" "${overlay_files[@]}"
  fi
}

# ---------------------------------------------------------------------------
# TypeScript SDK  (sdk-output/ must already be built)
# ---------------------------------------------------------------------------
sync_typescript() {
  echo ""
  echo "=== Syncing TypeScript SDK docs ==="
  local src="$SDK_ROOT/typescript-sdk/sdk-output"
  local ref_dest="$PORTAL_ROOT/docs/tools/sdk/typescript/Reference"
  local overlay_dest="$PORTAL_ROOT/static/code-examples/v1/typescript_code_examples_overlay.yaml"

  if [ ! -d "$src" ]; then
    echo "  SKIP: $src does not exist. Run 'make build' in the TypeScript SDK first."
    return
  fi

  overlay_files=()
  for partition_dir in "$src"/*/; do
    [ -d "$partition_dir/docs/Methods" ] || continue
    resource=$(basename "$partition_dir")
    echo "  -> $resource"
    run_rsync "$partition_dir/docs/Methods" "$ref_dest/$resource"
    run_rsync "$partition_dir/docs/Models"  "$ref_dest/$resource"
    if [ -f "$partition_dir/docs/Examples/typescript_code_examples_overlay.yaml" ]; then
      overlay_files+=("$partition_dir/docs/Examples/typescript_code_examples_overlay.yaml")
    fi
  done

  if [ ${#overlay_files[@]} -gt 0 ]; then
    write_file "$overlay_dest" "${overlay_files[@]}"
  fi
}

# ---------------------------------------------------------------------------
# Merge & apply code examples overlay to the main API spec
# ---------------------------------------------------------------------------
apply_code_examples() {
  echo ""
  echo "=== Merging and applying v1 code examples ==="
  cd "$PORTAL_ROOT"
  npm run v1-merge-code-examples
  npm run overlay-code-examples-v1
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
    sync_go
    sync_python
    sync_powershell
    sync_typescript
    ;;
  *) echo "Unknown SDK: $ONLY_SDK. Choose from: go, python, powershell, typescript"; exit 1 ;;
esac

if ! $DRY_RUN; then
  apply_code_examples
  echo ""
  echo "Done! Start the portal with:"
  echo "  cd $PORTAL_ROOT && npm start"
fi
