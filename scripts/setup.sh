#!/usr/bin/env bash
# setup.sh
#
# One-shot setup: clones (or updates) the four SDK repos, builds their docs
# from the portal's API specs, syncs reference docs into the portal, and
# regenerates all API documentation.
#
# Usage:
#   npm run setup                 # standard full setup
#   npm run setup -- --skip-build # re-sync without rebuilding SDKs (fast refresh)
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

# Pass any extra flags (e.g. --skip-build, --sdk go) through to sync script
EXTRA_ARGS=("$@")

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

echo ""
echo "=== Cloning / updating SDK repos into $SDK_ROOT ==="
mkdir -p "$SDK_ROOT"

for i in "${!SDK_NAMES[@]}"; do
  name="${SDK_NAMES[$i]}"
  url="${SDK_URLS[$i]}"
  dest="$SDK_ROOT/$name"
  if [ -d "$dest/.git" ]; then
    echo "  Updating $name..."
    git -C "$dest" fetch --quiet origin
    git -C "$dest" reset --hard origin/HEAD --quiet
  else
    echo "  Cloning $name..."
    git clone --depth 1 --quiet "$url" "$dest"
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
echo "Done! Run 'npm start' to launch the portal."
