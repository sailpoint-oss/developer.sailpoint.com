#!/usr/bin/env bash
# setup.sh
#
# One-shot setup: clones (or updates) the four SDK repos, builds their docs
# from the portal's API specs, syncs reference docs into the portal, and
# regenerates all API documentation.
#
# Usage:
#   npm run setup                              # standard full setup
#   npm run setup -- --skip-build             # re-sync without rebuilding SDKs (fast refresh)
#   npm run setup -- --branch-go feat/new-templates          # use a specific branch for Go SDK
#   npm run setup -- --branch-python my-branch --branch-go other-branch
#
# Branch flags (can be combined):
#   --branch-go <branch>          Branch for golang-sdk
#   --branch-python <branch>      Branch for python-sdk
#   --branch-powershell <branch>  Branch for powershell-sdk
#   --branch-typescript <branch>  Branch for typescript-sdk
#
# After this completes, run: npm start
#
# Prerequisites:
#   - Node.js 18+
#   - Java 17+  (brew install openjdk@17)
#   - rsync     (brew install rsync)

set -eo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORTAL_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SDK_ROOT="$PORTAL_ROOT/sdk-repos"

# ---------------------------------------------------------------------------
# Parse args — separate branch flags from flags meant for sync script
# ---------------------------------------------------------------------------
BRANCH_GO=""
BRANCH_PYTHON=""
BRANCH_POWERSHELL=""
BRANCH_TYPESCRIPT=""
EXTRA_ARGS=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    --branch-go)         BRANCH_GO="$2";         shift 2 ;;
    --branch-python)     BRANCH_PYTHON="$2";     shift 2 ;;
    --branch-powershell) BRANCH_POWERSHELL="$2"; shift 2 ;;
    --branch-typescript) BRANCH_TYPESCRIPT="$2"; shift 2 ;;
    *)                   EXTRA_ARGS+=("$1");      shift ;;
  esac
done

# ---------------------------------------------------------------------------
# SDK repos to clone / pull
# ---------------------------------------------------------------------------
SDK_NAMES=(golang-sdk python-sdk powershell-sdk typescript-sdk)
SDK_URLS=(
  "https://github.com/sailpoint-oss/golang-sdk.git"
  "https://github.com/sailpoint-oss/python-sdk.git"
  "https://github.com/sailpoint-oss/powershell-sdk.git"
  "https://github.com/sailpoint-oss/typescript-sdk.git"
)
SDK_BRANCHES=(
  "$BRANCH_GO"
  "$BRANCH_PYTHON"
  "$BRANCH_POWERSHELL"
  "$BRANCH_TYPESCRIPT"
)

echo ""
echo "=== Cloning / updating SDK repos into $SDK_ROOT ==="
mkdir -p "$SDK_ROOT"

for i in "${!SDK_NAMES[@]}"; do
  name="${SDK_NAMES[$i]}"
  url="${SDK_URLS[$i]}"
  dest="$SDK_ROOT/$name"
  branch="${SDK_BRANCHES[$i]}"

  if [ -d "$dest/.git" ]; then
    echo "  Updating $name${branch:+ (branch: $branch)}..."
    if [ -n "$branch" ]; then
      # Explicitly fetch the named branch (required for shallow clones)
      git -C "$dest" fetch --quiet --depth 1 origin "$branch"
      git -C "$dest" checkout --quiet -B "$branch" FETCH_HEAD
    else
      git -C "$dest" fetch --quiet origin
      git -C "$dest" reset --hard origin/HEAD --quiet
    fi
  else
    echo "  Cloning $name${branch:+ (branch: $branch)}..."
    if [ -n "$branch" ]; then
      git clone --depth 1 --branch "$branch" --quiet "$url" "$dest"
    else
      git clone --depth 1 --quiet "$url" "$dest"
    fi
  fi
done

# ---------------------------------------------------------------------------
# Build SDKs + sync docs into portal
# ---------------------------------------------------------------------------
echo ""
echo "=== Building SDKs and syncing docs ==="
SDK_ROOT="$SDK_ROOT" PORTAL_ROOT="$PORTAL_ROOT" \
  bash "$SCRIPT_DIR/sync-sdk-docs-local.sh" "${EXTRA_ARGS[@]}"

# ---------------------------------------------------------------------------
# Regenerate OpenAPI reference docs and apply code example overlays
# ---------------------------------------------------------------------------
echo ""
echo "=== Generating API reference docs ==="
cd "$PORTAL_ROOT"
npm run rebuild-docs

echo ""
echo "Done! Run 'npm run start' to launch the portal."
