#!/usr/bin/env node
/**
 * Escapes raw angle brackets in the `description` and `summary` fields of the
 * IdentityIQ 9.0 OpenAPI spec so the generated MDX compiles cleanly.
 *
 * The 9.0 spec contains prose with pseudo-tags such as `<pre>`, `<true or
 * false>`, and `<attributeName>`. docusaurus-plugin-openapi-docs only escapes a
 * subset of these (it whitelists real HTML tag prefixes like `p` and `a`), so
 * the leftover `<` characters are parsed as JSX by MDX and break the build.
 *
 * Escaping `<`/`>` to their HTML entities keeps the text rendering identical
 * (markdown renders `&lt;` as `<`) while making the content MDX-safe. The
 * transform is idempotent and only touches description/summary strings.
 *
 * Run from the repo root: node scripts/sanitize-iiq-spec.js
 */
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SPEC_PATH = path.resolve(
  __dirname,
  '..',
  'static/api-specs/iiq/sailpoint-api.iiq-9.0.yaml',
);

const FIELDS = new Set(['description', 'summary']);

function escapeAngleBrackets(value) {
  return value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function walk(node) {
  if (Array.isArray(node)) {
    node.forEach(walk);
    return;
  }
  if (node && typeof node === 'object') {
    for (const [key, value] of Object.entries(node)) {
      if (FIELDS.has(key) && typeof value === 'string') {
        node[key] = escapeAngleBrackets(value);
      } else {
        walk(value);
      }
    }
  }
}

function main() {
  const raw = fs.readFileSync(SPEC_PATH, 'utf8');
  const doc = yaml.load(raw);
  walk(doc);
  const out = yaml.dump(doc, { lineWidth: -1, noRefs: true });
  fs.writeFileSync(SPEC_PATH, out, 'utf8');
  console.log(`Sanitized IIQ 9.0 spec: ${SPEC_PATH}`);
}

main();
