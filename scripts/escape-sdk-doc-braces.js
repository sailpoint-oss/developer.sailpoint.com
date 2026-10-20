#!/usr/bin/env node
/**
 * escape-sdk-doc-braces.js
 *
 * Makes generated SDK reference docs safe for Docusaurus' MDX v3 parser.
 *
 * WHY THIS EXISTS
 * ----------------
 * The SDK reference docs are produced by openapi-generator from the API specs.
 * When an OpenAPI parameter/property `description` spans multiple lines (e.g. a
 * markdown bullet list), openapi-generator collapses it onto a single line to
 * fit a markdown table cell AND HTML-escapes any backticks to `&#x60;`. The
 * backticks therefore no longer form an inline-code span, so a placeholder like
 * `{accountID}` is left as bare text in the cell. Docusaurus (MDX v3) then
 * parses `{accountID}` as a JSX expression and the static build crashes at
 * render time with:
 *
 *   ReferenceError: accountID is not defined
 *
 * Example trigger (approvals config endpoints, `id`/`scope` params):
 *   ... id/scope is the following:  * &#x60;{accountID}&#x60;/&#x60;ACCOUNT&#x60; ...
 *
 * THE FIX
 * -------
 * Escape `{` and `}` to `\{` and `\}` in prose so MDX treats them as literal
 * text. Escaping is skipped inside fenced code blocks, inline code spans, and
 * frontmatter, where braces are already literal (and where a backslash would
 * show up verbatim). This is idempotent — already-escaped braces are left
 * alone.
 *
 * Usage:
 *   node scripts/escape-sdk-doc-braces.js <sdkRootDir>
 *
 * <sdkRootDir> defaults to docs/tools/sdk. Every `*.md` / `*.mdx` under any
 * `Reference/` directory below it is processed.
 */
"use strict";

const fs = require("fs");
const path = require("path");

const sdkRoot =
  process.argv[2] || path.resolve(__dirname, "..", "docs", "tools", "sdk");

// Escape unescaped { and } in a plain-text (non-code) segment.
function escapeBracesInText(text) {
  return text.replace(/(\\?)([{}])/g, (m, slash, brace) =>
    slash ? m : "\\" + brace
  );
}

// Escape braces on a single line, leaving inline code spans (`...`, ``...``)
// untouched. Inline code content is literal in MDX, so it needs no escaping.
function escapeLineOutsideInlineCode(line) {
  let out = "";
  let i = 0;
  const re = /(`+)/g; // runs of backticks open/close inline code spans
  let lastIndex = 0;
  let match;
  while ((match = re.exec(line)) !== null) {
    const fence = match[1];
    const spanStart = match.index;
    // Text before this backtick run: escape it.
    out += escapeBracesInText(line.slice(lastIndex, spanStart));
    // Find the matching closing run of the same length.
    const closeRe = new RegExp("`{" + fence.length + "}", "g");
    closeRe.lastIndex = spanStart + fence.length;
    const close = closeRe.exec(line);
    if (!close) {
      // Unbalanced backticks: treat the rest of the line as plain text.
      out += escapeBracesInText(line.slice(spanStart));
      lastIndex = line.length;
      re.lastIndex = line.length;
      break;
    }
    const spanEnd = close.index + fence.length;
    out += line.slice(spanStart, spanEnd); // inline code — leave verbatim
    lastIndex = spanEnd;
    re.lastIndex = spanEnd;
  }
  out += escapeBracesInText(line.slice(lastIndex));
  return out;
}

function transform(content) {
  const lines = content.split("\n");
  let inFence = false;
  let fenceMarker = "";
  let inFrontmatter = false;

  // Detect frontmatter: a `---` on the very first line.
  if (lines[0] !== undefined && /^---\s*$/.test(lines[0])) {
    inFrontmatter = true;
  }

  for (let idx = 0; idx < lines.length; idx++) {
    const line = lines[idx];

    if (inFrontmatter) {
      if (idx > 0 && /^---\s*$/.test(line)) inFrontmatter = false;
      continue; // never escape frontmatter
    }

    const fenceMatch = line.match(/^(\s*)(`{3,}|~{3,})/);
    if (fenceMatch) {
      const marker = fenceMatch[2][0];
      if (!inFence) {
        inFence = true;
        fenceMarker = marker;
      } else if (marker === fenceMarker) {
        inFence = false;
        fenceMarker = "";
      }
      continue; // fence delimiter lines and their contents stay verbatim
    }

    if (inFence) continue; // inside a code block — leave verbatim

    lines[idx] = escapeLineOutsideInlineCode(line);
  }

  return lines.join("\n");
}

function walk(dir, files) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.mdx?$/.test(entry.name)) files.push(full);
  }
}

function main() {
  if (!fs.existsSync(sdkRoot)) {
    console.log(`  escape-sdk-doc-braces: ${sdkRoot} does not exist — skipping`);
    return;
  }

  // Collect every Reference/ dir under the SDK root.
  const refDirs = [];
  for (const sdk of fs.readdirSync(sdkRoot, { withFileTypes: true })) {
    if (!sdk.isDirectory()) continue;
    const refDir = path.join(sdkRoot, sdk.name, "Reference");
    if (fs.existsSync(refDir)) refDirs.push(refDir);
  }

  const files = [];
  for (const dir of refDirs) walk(dir, files);

  let changed = 0;
  for (const file of files) {
    const before = fs.readFileSync(file, "utf8");
    const after = transform(before);
    if (after !== before) {
      fs.writeFileSync(file, after);
      changed++;
    }
  }
  console.log(
    `  escape-sdk-doc-braces: processed ${files.length} file(s), escaped braces in ${changed}`
  );
}

main();
