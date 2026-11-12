#!/usr/bin/env node
/**
 * Fetches Discourse topics and writes render-ready snapshots for the
 * /blog-redesign pages. Each snapshot becomes one post page at
 * /blog-redesign/<topic slug>, and a card on the /blog-redesign landing page.
 *
 * Usage:
 *   node scripts/fetch-blog-redesign-topic.mjs              latest 12 Community Blog posts
 *   node scripts/fetch-blog-redesign-topic.mjs --latest 20  latest 20 Community Blog posts
 *   node scripts/fetch-blog-redesign-topic.mjs 216502 ...   specific topic ids
 *
 * The script turns the "cooked" HTML of every post into a small JSON tree
 * ({t, a, c} nodes and plain strings). The page renders that tree with React,
 * so the static build contains the full article and code blocks get the
 * normal Docusaurus syntax highlighting.
 */
import {writeFileSync, mkdirSync} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {parseFragment} from 'parse5';

const ORIGIN = 'https://developer.sailpoint.com';
const BASE = `${ORIGIN}/discuss`;
const BLOG_CATEGORY = 'content/community-blog/125';
const DEFAULT_LATEST = 12;
const WORDS_PER_MINUTE = 230;

const here = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(here, '../src/components/blog-redesign/data');

async function getJson(path) {
  const res = await fetch(`${BASE}${path}`, {
    headers: {Accept: 'application/json', 'User-Agent': 'blog-redesign-snapshot'},
  });
  if (!res.ok) throw new Error(`${path} -> HTTP ${res.status}`);
  return res.json();
}

const absUrl = (url) => {
  if (!url) return url;
  if (url.startsWith('//')) return `https:${url}`;
  if (url.startsWith('/')) return `${ORIGIN}${url}`;
  return url;
};

const avatar = (template, size = 96) => absUrl(template?.replace('{size}', size));

// ---------------------------------------------------------------------------
// Cooked HTML -> JSON tree
// ---------------------------------------------------------------------------

const attrMap = (node) =>
  Object.fromEntries((node.attrs ?? []).map(({name, value}) => [name, value]));

const hasClass = (node, cls) =>
  (attrMap(node).class ?? '').split(/\s+/).includes(cls);

const textOf = (node) => {
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes ?? []).map(textOf).join('');
};

const BLOCK_TAGS = new Set([
  'div', 'pre', 'ul', 'ol', 'table', 'blockquote', 'h1', 'h2', 'h3', 'h4',
  'h5', 'h6', 'hr', 'p', 'aside', 'details',
]);

const URL_ATTRS = new Set(['href', 'src', 'data-download-href']);

/** Converts one parse5 node. Returns a node, a string, an array, or null. */
function convert(node, ctx) {
  if (node.nodeName === '#text') return node.value;
  if (node.nodeName === '#comment') return null;

  const tag = node.tagName;
  const attrs = attrMap(node);

  // Discourse decoration that does not belong in the redesign.
  if (tag === 'svg') return null;
  if (tag === 'div' && hasClass(node, 'meta')) return null;
  if (tag === 'a' && hasClass(node, 'anchor')) return null;

  // Fenced code block: <pre><code class="lang-x">...</code></pre>
  if (tag === 'pre') {
    const code = node.childNodes.find((n) => n.tagName === 'code');
    if (code) {
      const lang = (attrMap(code).class ?? '').match(/lang-([\w-]+)/)?.[1] ?? 'text';
      const value = textOf(code).replace(/\n$/, '');
      if (lang === 'mermaid') return {t: 'mermaid', a: {value}};
      return {t: 'codeblock', a: {lang: lang === 'auto' ? 'text' : lang, value}};
    }
  }

  // Lightbox image -> one node the page can open in a viewer.
  if (tag === 'div' && hasClass(node, 'lightbox-wrapper')) {
    const link = node.childNodes.find((n) => n.tagName === 'a');
    const img = link?.childNodes.find((n) => n.tagName === 'img');
    if (img) {
      const i = attrMap(img);
      return {
        t: 'lightbox',
        a: {
          full: absUrl(attrMap(link).href),
          src: absUrl(i.src),
          srcSet: i.srcset
            ?.split(',')
            .map((s) => s.trim().replace(/^(\S+)/, (u) => absUrl(u)))
            .join(', '),
          alt: i.alt ?? '',
          width: i.width,
          height: i.height,
        },
      };
    }
  }

  const out = {t: tag, a: {}};
  for (const [name, value] of Object.entries(attrs)) {
    if (name.startsWith('data-') && !['data-wrap'].includes(name)) continue;
    out.a[name] = URL_ATTRS.has(name) ? absUrl(value) : value;
  }
  if (out.a.srcset) {
    out.a.srcset = out.a.srcset
      .split(',')
      .map((s) => s.trim().replace(/^(\S+)/, (u) => absUrl(u)))
      .join(', ');
  }

  // Headings: take the id from the Discourse anchor and collect them for the TOC.
  if (/^h[1-6]$/.test(tag)) {
    const anchor = node.childNodes.find((n) => n.tagName === 'a' && hasClass(n, 'anchor'));
    const name = anchor ? attrMap(anchor).name : undefined;
    const id =
      name?.replace(/^p-\d+-/, '').replace(/-\d+$/, '') ??
      textOf(node).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    out.a.id = id;
    if (ctx.headings) ctx.headings.push({level: Number(tag[1]), id, title: textOf(node).trim()});
  }

  out.c = node.childNodes.flatMap((child) => {
    const converted = convert(child, ctx);
    return converted == null ? [] : [converted];
  });

  // A <p> that holds block content (Discourse puts lightboxes in <p>) is
  // invalid HTML and breaks React hydration. Render it as a <div>.
  if (tag === 'p' && out.c.some((c) => typeof c === 'object' && (BLOCK_TAGS.has(c.t) || c.t === 'lightbox' || c.t === 'codeblock'))) {
    out.t = 'div';
    out.a.class = [out.a.class, 'para'].filter(Boolean).join(' ');
  }

  // The HTML parser closes a <p> when a block element starts inside it, which
  // leaves empty paragraphs behind. Drop them.
  if (tag === 'p' && out.c.every((c) => typeof c === 'string' && c.trim() === '')) {
    return null;
  }

  if (!Object.keys(out.a).length) delete out.a;
  if (!out.c.length) delete out.c;
  return out;
}

function cookedToTree(html, ctx = {}) {
  const fragment = parseFragment(html);
  const nodes = fragment.childNodes
    .map((n) => convert(n, ctx))
    .filter((n) => n != null && !(typeof n === 'string' && n.trim() === ''));
  return nodes;
}

const wordCount = (html) =>
  textOf(parseFragment(html)).split(/\s+/).filter(Boolean).length;

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const categoryCache = new Map();
async function category(id) {
  if (!id) return null;
  if (categoryCache.has(id)) return categoryCache.get(id);
  const {category: c} = await getJson(`/c/${id}/show.json`);
  const result = {
    id: c.id,
    name: c.name,
    slug: c.slug,
    color: `#${c.color}`,
    readRestricted: Boolean(c.read_restricted),
    parent: c.parent_category_id ? await category(c.parent_category_id) : null,
  };
  categoryCache.set(id, result);
  return result;
}

/** Fetches one topic and writes its snapshot file. */
async function snapshotTopic(topicId) {
  const topic = await getJson(`/t/${topicId}.json`);

  // The first response holds at most 20 posts. Fetch the rest by id.
  const loaded = new Set(topic.post_stream.posts.map((p) => p.id));
  const missing = topic.post_stream.stream.filter((id) => !loaded.has(id));
  for (let i = 0; i < missing.length; i += 20) {
    const ids = missing.slice(i, i + 20).map((id) => `post_ids[]=${id}`).join('&');
    const more = await getJson(`/t/${topicId}/posts.json?${ids}`);
    topic.post_stream.posts.push(...more.post_stream.posts);
  }

  const opUsername = topic.details?.created_by?.username ?? topic.post_stream.posts[0].username;

  const headings = [];
  const posts = topic.post_stream.posts
    .filter((p) => p.post_type === 1 && !p.hidden)
    .map((p, index) => {
      const body = cookedToTree(p.cooked, index === 0 ? {headings} : {});
      const likes =
        (p.reactions ?? []).reduce((sum, r) => sum + (r.count ?? 0), 0) ||
        (p.actions_summary ?? []).find((a) => a.id === 2)?.count ||
        0;
      return {
        id: p.id,
        number: p.post_number,
        username: p.username,
        name: p.name || p.username,
        avatar: avatar(p.avatar_template),
        userTitle: p.user_title || null,
        isAuthor: p.username === opUsername,
        staff: Boolean(p.staff),
        flair: p.flair_url ? {url: absUrl(p.flair_url), name: p.flair_name} : null,
        createdAt: p.created_at,
        replyTo: p.reply_to_user ? p.reply_to_user.username : null,
        likes,
        url: `${BASE}/t/${topic.slug}/${topic.id}/${p.post_number}`,
        words: wordCount(p.cooked),
        body,
      };
    });

  // Authors use different heading levels. The TOC lists the top level that
  // the article uses (h2 in most posts, h3 in some).
  const topLevel = Math.min(...headings.map((h) => h.level));
  const toc = headings.filter((h) => h.level === topLevel).map(({id, title}) => ({id, title}));

  // The first image of the article is the title card. Show it as the hero and
  // remove it from the body, so it does not appear twice.
  const article = posts[0];
  let hero = topic.image_url ? {src: topic.image_url, alt: topic.title} : null;
  const firstBlock = article.body[0];
  const firstImage =
    firstBlock?.t === 'lightbox'
      ? firstBlock
      : firstBlock?.c?.length === 1 && firstBlock.c[0]?.t === 'lightbox'
        ? firstBlock.c[0]
        : null;
  if (firstImage) {
    hero = {src: firstImage.a.full, alt: firstImage.a.alt || topic.title};
    article.body.shift();
  }

  const snapshot = {
    fetchedAt: new Date().toISOString(),
    id: topic.id,
    slug: topic.slug,
    title: topic.title,
    url: `${BASE}/t/${topic.slug}/${topic.id}`,
    createdAt: topic.created_at,
    views: topic.views,
    likeCount: topic.like_count,
    tags: (topic.tags ?? []).map((t) => (typeof t === 'string' ? t : t.name)),
    category: await category(topic.category_id),
    // Discourse counts words for the whole topic. Use the same number Discourse
    // uses, so the read time matches the forum.
    readMinutes: Math.max(
      1,
      Math.round((topic.word_count ?? article.words) / WORDS_PER_MINUTE),
    ),
    hero,
    toc,
    posts,
  };

  const out = resolve(OUT_DIR, `topic-${topicId}.json`);
  writeFileSync(out, JSON.stringify(snapshot, null, 1) + '\n');
  console.log(
    `Wrote ${out}\n  ${posts.length} posts, ${toc.length} TOC entries, ${snapshot.readMinutes} min read`,
  );
}

/** The newest topics in the Community Blog, without the pinned "About" topic. */
async function latestBlogTopics(count) {
  const ids = [];
  for (let page = 0; ids.length < count; page++) {
    const {topic_list: list} = await getJson(`/c/${BLOG_CATEGORY}/l/latest.json?page=${page}`);
    ids.push(...list.topics.filter((t) => !t.pinned).map((t) => t.id));
    if (!list.more_topics_url) break;
  }
  return ids.slice(0, count);
}

const args = process.argv.slice(2);
const latestFlag = args.indexOf('--latest');
const topicIds =
  latestFlag === -1 && args.length
    ? args.map(Number)
    : await latestBlogTopics(Number(args[latestFlag + 1] ?? DEFAULT_LATEST));

mkdirSync(OUT_DIR, {recursive: true});
for (const id of topicIds) {
  await snapshotTopic(id);
}
