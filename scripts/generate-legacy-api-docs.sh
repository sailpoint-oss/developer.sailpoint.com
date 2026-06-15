#!/usr/bin/env bash
# Regenerates Redocly HTML bundles for legacy API specs (light + dark themes).
# Run from the repository root: ./scripts/generate-legacy-api-docs.sh
#
# Prerequisites:
#   npm install -g redoc-cli   (or the script will fall back to npx)
#
# Output files are written to static/redoc/ and served at /redoc/<file>.html

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SPEC_DIR="$REPO_ROOT/static/api-specs/idn"
OUT_DIR="$REPO_ROOT/static/redoc"

mkdir -p "$OUT_DIR"

if command -v redoc-cli &>/dev/null; then
  REDOC="redoc-cli"
else
  echo "redoc-cli not found globally, falling back to npx"
  REDOC="npx redoc-cli"
fi

DARK_OPTIONS='{
  "theme": {
    "colors": {
      "primary": { "main": "#4d9fff" },
      "text": { "primary": "#e8eaf0", "secondary": "#a0aab4" },
      "background": { "default": "#1b1b1d" }
    },
    "sidebar": { "backgroundColor": "#242526", "textColor": "#e8eaf0" },
    "rightPanel": { "backgroundColor": "#18191a" }
  }
}'

bundle() {
  local key="$1"
  local title="$2"
  local spec_file="$SPEC_DIR/sailpoint-api.${key}.yaml"

  if [[ ! -f "$spec_file" ]]; then
    echo "WARN: spec file not found, skipping: $spec_file"
    return
  fi

  echo "Generating light + dark docs for sailpoint-api.${key}.yaml..."

  $REDOC bundle "$spec_file" \
    --title "$title" \
    -o "$OUT_DIR/sailpoint-api-${key}-light.html"

  $REDOC bundle "$spec_file" \
    --title "$title" \
    --options.theme.colors.primary.main="#4d9fff" \
    --options.theme.colors.text.primary="#e8eaf0" \
    --options.theme.colors.text.secondary="#a0aab4" \
    --options.theme.colors.background.default="#1b1b1d" \
    --options.theme.sidebar.backgroundColor="#242526" \
    --options.theme.sidebar.textColor="#e8eaf0" \
    --options.theme.rightPanel.backgroundColor="#18191a" \
    -o "$OUT_DIR/sailpoint-api-${key}-dark.html"

  echo "  Done: sailpoint-api-${key}-light.html + sailpoint-api-${key}-dark.html"
}

bundle "beta"  "SailPoint ISC API (Beta)"
bundle "v3"    "SailPoint ISC API (V3)"
bundle "v2024" "SailPoint ISC API (V2024)"
bundle "v2025" "SailPoint ISC API (V2025)"
bundle "v2026" "SailPoint ISC API (V2026)"

echo ""
echo "All legacy API docs generated in $OUT_DIR"
