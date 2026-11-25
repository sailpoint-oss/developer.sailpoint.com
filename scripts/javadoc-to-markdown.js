#!/usr/bin/env node
/**
 * javadoc-to-markdown.js
 *
 * Writes a Markdown version of the rule Javadoc for the Java Docs page's
 * "View as Markdown" and "Copy page" buttons.
 *
 * WHY THIS EXISTS
 * ----------------
 * The Java Docs page (docs/extensibility/rules/rule-java-docs/index.mdx) shows
 * the rule Javadoc in an iframe. The llms-txt plugin builds each page's
 * Markdown file by copying the page source, so this page's java-docs.md only
 * contains the iframe tag, not the Javadoc itself.
 *
 * THE FIX
 * -------
 * After `npm run build` (this runs as the `postbuild` npm script), convert the
 * Javadoc HTML in static/rule-java-docs/ (synced from the rule-javadoc repo)
 * into Markdown and replace java-docs.md in the build output with it.
 *
 * Usage:
 *   node scripts/javadoc-to-markdown.js [buildDir]
 *
 * [buildDir] defaults to build.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const ROOT = path.join(__dirname, '..');
const JAVADOC_DIR = path.join(ROOT, 'static', 'rule-java-docs');
const PAGE_SOURCE = path.join(
  ROOT,
  'docs',
  'extensibility',
  'rules',
  'rule-java-docs',
  'index.mdx',
);
const BUILD_DIR = path.resolve(ROOT, process.argv[2] ?? 'build');
const OUTPUT_FILE = path.join(
  BUILD_DIR,
  'docs',
  'extensibility',
  'rules',
  'java-docs.md',
);
const JAVADOC_URL = 'https://developer.sailpoint.com/rule-java-docs/';

const DETAIL_SECTIONS = [
  ['enum-constant-details', 'Enum constants'],
  ['field-details', 'Fields'],
  ['constructor-details', 'Constructors'],
  ['method-details', 'Methods'],
];

const clean = (text) => text.replace(/ /g, ' ').replace(/\s+/g, ' ').trim();

// Convert a Javadoc description block (HTML) into Markdown.
function toMarkdown($, node) {
  const inlineNode = (child) => {
    if (child.type === 'text') return child.data.replace(/\s+/g, ' ');
    if (child.type !== 'tag') return '';
    const tag = child.name;
    if (tag === 'code' || tag === 'tt')
      return '`' + clean($(child).text()) + '`';
    if (tag === 'b' || tag === 'strong') return `**${inline(child).trim()}**`;
    if (tag === 'i' || tag === 'em') return `_${inline(child).trim()}_`;
    if (tag === 'br') return '\n\n';
    if (tag === 'a') {
      const href = $(child).attr('href') ?? '';
      const label = inline(child).trim();
      // Links to other Javadoc pages become plain text; external links are kept.
      return /^https?:/.test(href) ? `[${label}](${href})` : label;
    }
    return inline(child);
  };
  const inline = (el) =>
    $(el)
      .contents()
      .map((_, child) => inlineNode(child))
      .get()
      .join('');

  const blocks = [];
  let paragraph = '';
  const flush = () => {
    if (paragraph.trim()) {
      blocks.push(
        paragraph
          .trim()
          .replace(/[ \t]+/g, ' ')
          .replace(/ ?\n ?/g, '\n'),
      );
    }
    paragraph = '';
  };
  $(node)
    .contents()
    .each((_, child) => {
      const tag = child.type === 'tag' ? child.name : null;
      if (tag === 'p' || tag === 'div') {
        flush();
        blocks.push(toMarkdown($, child));
      } else if (tag === 'pre') {
        flush();
        blocks.push(
          '```java\n' +
            $(child)
              .text()
              .replace(/^\n+|\s+$/g, '') +
            '\n```',
        );
      } else if (tag === 'ul' || tag === 'ol') {
        flush();
        const items = $(child)
          .children('li')
          .map(
            (i, li) =>
              `${tag === 'ol' ? `${i + 1}.` : '-'} ${clean(inline(li))}`,
          )
          .get();
        blocks.push(items.join('\n'));
      } else {
        paragraph += inlineNode(child);
      }
    });
  flush();
  return blocks.filter(Boolean).join('\n\n');
}

// Convert a Javadoc <dl class="notes"> (Parameters, Returns, Throws, ...).
function notesToMarkdown($, dl) {
  const groups = [];
  $(dl)
    .children()
    .each((_, child) => {
      if (child.name === 'dt')
        groups.push({label: clean($(child).text()), items: []});
      if (child.name !== 'dd' || !groups.length) return;
      // "See Also" entries are a nested list; each item becomes its own bullet.
      const list = $(child).children('ul');
      const parts = list.length ? list.children('li').get() : [child];
      for (const part of parts) {
        const text = clean(toMarkdown($, part)).replace(/\n+/g, ' ');
        // Skip the link to Javadoc's separate constant-values page.
        if (text && text !== 'Constant Field Values')
          groups.at(-1).items.push(`- ${text}`);
      }
    });
  return groups
    .filter((g) => g.items.length)
    .map((g) => `**${g.label}**\n\n${g.items.join('\n')}`)
    .join('\n\n');
}

function signature($, el) {
  return '```java\n' + clean($(el).text()).replace(/ ,/g, ',') + '\n```';
}

function convertClass(file) {
  const $ = cheerio.load(fs.readFileSync(file, 'utf8'));
  const main = $('main');
  const title = clean(main.find('h1').first().text());
  const pkg = clean(main.find('.sub-title').first().text()).replace(
    /^Package\s+/,
    '',
  );
  const out = [`### ${title}`, ''];

  const description = main.find('section.class-description');
  out.push(signature($, description.find('.type-signature').first()), '');
  const block = description.children('.block').first();
  if (block.length) out.push(toMarkdown($, block), '');
  const notes = description.children('dl.notes').first();
  if (notes.length) out.push(notesToMarkdown($, notes), '');

  for (const [sectionClass, heading] of DETAIL_SECTIONS) {
    const details = main.find(`section.${sectionClass} section.detail`);
    if (!details.length) continue;
    out.push(`#### ${heading}`, '');
    details.each((_, detail) => {
      const d = $(detail);
      out.push(`##### ${clean(d.children('h3').first().text())}`, '');
      out.push(signature($, d.children('.member-signature').first()), '');
      const memberBlock = d.children('.block').first();
      if (memberBlock.length) out.push(toMarkdown($, memberBlock), '');
      const memberNotes = d.children('dl.notes').first();
      if (memberNotes.length) out.push(notesToMarkdown($, memberNotes), '');
    });
  }

  return {pkg, title, markdown: out.join('\n')};
}

function classFiles(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return [
        'class-use',
        'index-files',
        'legal',
        'resources',
        'script-dir',
      ].includes(entry.name)
        ? []
        : classFiles(full);
    }
    // Class pages live in package folders; skip package and site-level pages.
    return entry.name.endsWith('.html') &&
      !entry.name.startsWith('package-') &&
      dir !== JAVADOC_DIR
      ? [full]
      : [];
  });
}

// Use the page's title, the same way the llms-txt plugin does.
function pageTitle() {
  const source = fs.readFileSync(PAGE_SOURCE, 'utf8');
  const match = source.match(/^title:\s*(.+)$/m);
  return match ? match[1].trim().replace(/^['"]|['"]$/g, '') : 'Java docs';
}

function main() {
  // Skip rather than fail, so a missing input never breaks `npm run build`.
  for (const required of [
    JAVADOC_DIR,
    PAGE_SOURCE,
    path.dirname(OUTPUT_FILE),
  ]) {
    if (!fs.existsSync(required)) {
      console.log(
        `  javadoc-to-markdown: ${path.relative(
          ROOT,
          required,
        )} does not exist — skipping`,
      );
      return;
    }
  }

  const classes = classFiles(JAVADOC_DIR)
    .map(convertClass)
    .sort(
      (a, b) => a.pkg.localeCompare(b.pkg) || a.title.localeCompare(b.title),
    );
  const packages = [...new Set(classes.map((c) => c.pkg))];

  const markdown = [
    `# ${pageTitle()}`,
    '',
    'This is the reference for the Java classes and methods you can use in SailPoint Identity Security rules. ' +
      `It's generated from the [rule Javadoc](${JAVADOC_URL}).`,
    '',
    ...packages.flatMap((pkg) => [
      `## ${pkg}`,
      '',
      ...classes.filter((c) => c.pkg === pkg).map((c) => c.markdown),
    ]),
  ]
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trimEnd();

  fs.writeFileSync(OUTPUT_FILE, markdown + '\n');
  console.log(
    `  javadoc-to-markdown: wrote ${classes.length} classes in ${
      packages.length
    } packages to ${path.relative(ROOT, OUTPUT_FILE)}`,
  );
}

main();
