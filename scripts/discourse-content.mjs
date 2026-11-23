/**
 * Reads Community Blog and Video Library topics from Discourse and turns them
 * into the snapshots that the blog-redesign pages render.
 * blog-redesign-plugin.ts calls it on every build and start.
 *
 * A snapshot turns the "cooked" HTML of every post into a small JSON tree
 * ({t, a, c} nodes and plain strings). The page renders that tree with React,
 * so the static build contains the full article and code blocks get the
 * normal Docusaurus syntax highlighting.
 */
import {parseFragment} from 'parse5';

export const ORIGIN = 'https://developer.sailpoint.com';
export const BASE = `${ORIGIN}/discuss`;
export const BLOG_CATEGORY = 'content/community-blog/125';
export const VIDEO_CATEGORY = 'content/video-library/127';
const WORDS_PER_MINUTE = 230;
/**
 * The video hosts that the site allows in frames: frame-src in the
 * Content-Security-Policy of docusaurus.config.ts and template.yaml. Keep this
 * list the same as those two.
 */
const FRAME_HOSTS = ['www.youtube.com', 'play.vidyard.com'];

// ---------------------------------------------------------------------------
// Requests
//
// A full build reads several hundred topics. Discourse limits anonymous
// requests for each IP address and answers HTTP 429 above the limit. So at
// most MAX_CONCURRENT requests run at once, and a 429 waits and tries again.

const MAX_CONCURRENT = 4;
const MAX_RETRIES = 5;
let active = 0;
const waiting = [];

async function slot() {
  if (active < MAX_CONCURRENT) {
    active++;
    return;
  }
  await new Promise((resolve) => waiting.push(resolve));
}

function release() {
  const next = waiting.shift();
  if (next) next();
  else active--;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getJson(path) {
  for (let attempt = 0; ; attempt++) {
    await slot();
    let res;
    try {
      res = await fetch(`${BASE}${path}`, {
        headers: {Accept: 'application/json', 'User-Agent': 'developer-sailpoint-com-build'},
      });
    } finally {
      release();
    }
    if (res.status === 429 && attempt < MAX_RETRIES) {
      const retryAfter = Number(res.headers.get('retry-after'));
      await sleep(retryAfter > 0 ? retryAfter * 1000 : 2 ** attempt * 1000);
      continue;
    }
    if (!res.ok) throw new Error(`${path} -> HTTP ${res.status}`);
    return res.json();
  }
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
// Video player
// ---------------------------------------------------------------------------

/**
 * Finds the video in the cooked HTML of a Video Library post. Posts embed it
 * in one of three ways: a Vidyard <iframe>, a YouTube "lazy video" block, or
 * an <iframe> from another host (StreamYard, for example).
 */
function findPlayer(html) {
  const vidyard = html.match(/<iframe[^>]+src="https?:\/\/play\.vidyard\.com\/([A-Za-z0-9_-]+)\.html/);
  if (vidyard) {
    const id = vidyard[1];
    return {
      provider: 'vidyard',
      id,
      embed: `https://play.vidyard.com/${id}.html`,
      thumbnail: `https://play.vidyard.com/${id}.jpg`,
    };
  }
  const lazy = html.match(/<div[^>]*class="[^"]*lazy-video-container[^"]*"[^>]*>[\s\S]*?<\/div>/);
  if (lazy) {
    const id = lazy[0].match(/data-video-id="([^"]+)"/)?.[1];
    const provider = lazy[0].match(/data-provider-name="([^"]+)"/)?.[1] ?? 'youtube';
    // Discourse saves a 16:9 copy of the YouTube poster. YouTube's own
    // hqdefault.jpg is 4:3 with black bars.
    const poster = lazy[0].match(/<img[^>]+src="([^"]+)"/)?.[1];
    if (id && provider === 'youtube') {
      return {
        provider,
        id,
        // www.youtube.com, not youtube-nocookie.com: the site CSP allows only
        // this host in frame-src.
        embed: `https://www.youtube.com/embed/${id}`,
        thumbnail: absUrl(poster) ?? `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      };
    }
  }
  const iframe = html.match(/<iframe[^>]+src="([^"]+)"/);
  const embed = iframe && absUrl(iframe[1]);
  // The browser blocks a frame from a host that the CSP does not allow. Then
  // the page shows a link to the forum instead of a blocked player.
  if (embed && FRAME_HOSTS.includes(new URL(embed).host)) {
    return {provider: 'embed', id: null, embed, thumbnail: null};
  }
  return null;
}

const classes = (node) => (typeof node === 'object' ? (node.a?.class ?? '').split(/\s+/) : []);
const plainText = (node) =>
  typeof node === 'string' ? node : (node.c ?? []).map(plainText).join('');
const findImage = (node) => {
  if (typeof node !== 'object') return null;
  if (node.t === 'lightbox') return node.a.full;
  if (node.t === 'img') return node.a?.src ?? null;
  for (const child of node.c ?? []) {
    const found = findImage(child);
    if (found) return found;
  }
  return null;
};

/**
 * Removes what the video page shows elsewhere: the player (the page puts it
 * at the top), the hidden title card, a leading "Description" heading, and
 * "Watch now" lines that pointed at the player. Returns the hidden title
 * card image, which is the poster when the player has none.
 */
function cleanVideoBody(body) {
  let titleCard = null;
  const isPlayer = (node) =>
    typeof node === 'object' &&
    (node.t === 'iframe' ||
      classes(node).includes('lazy-video-container') ||
      (node.t === 'div' && (node.c ?? []).length > 0 && node.c.every((c) => isPlayer(c) || plainText(c).trim() === '')));
  const kept = body.filter((node) => {
    if (typeof node !== 'object') return true;
    if (node.a?.['data-wrap'] === 'hidden') {
      titleCard ??= findImage(node);
      return false;
    }
    if (isPlayer(node)) return false;
    const text = plainText(node).trim();
    if (node.t === 'p' && text.length <= 30 && /watch/i.test(text)) return false;
    return true;
  });
  const lead = kept[0];
  if (typeof lead === 'object' && /^h[1-6]$/.test(lead.t) && /^description$/i.test(plainText(lead).trim())) {
    kept.shift();
  }
  body.splice(0, body.length, ...kept);
  return titleCard;
}

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

/**
 * Fetches one topic and returns its snapshot. With `video`, the snapshot also
 * holds the player, and the body loses the parts the video page shows
 * elsewhere.
 */
export async function fetchTopic(topicId, {video = false} = {}) {
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
  if (firstImage && !video) {
    hero = {src: firstImage.a.full, alt: firstImage.a.alt || topic.title};
    article.body.shift();
  }

  let player = null;
  if (video) {
    const cooked = topic.post_stream.posts.find((p) => p.post_type === 1 && !p.hidden)?.cooked ?? '';
    player = findPlayer(cooked);
    const titleCard = cleanVideoBody(article.body);
    if (player && !player.thumbnail) player.thumbnail = titleCard ?? absUrl(topic.image_url) ?? null;
    if (!player) console.warn(`  No video player found in topic ${topicId}.`);
    // The title card is not a hero on a video page. The player takes its place.
    hero = null;
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
    // The topic image in the size Discourse makes for topic lists (1024 px
    // wide). Cards show it. `null` when the topic has no image.
    thumbnail: absUrl(topic.image_url) ?? null,
    toc: video ? [] : toc,
    ...(video ? {video: player} : {}),
    posts,
  };


  return snapshot;
}

/** The profile of one member, for the author page. */
export async function fetchAuthor(username) {
  const {user: u} = await getJson(`/u/${encodeURIComponent(username)}.json`);
  const profile = {
    fetchedAt: new Date().toISOString(),
    username: u.username,
    name: u.name || u.username,
    // The "Job Title" field that members fill in on their profile.
    jobTitle: u.user_fields?.['3'] || null,
    // The community title, for example "Expert Ambassador".
    title: u.title || null,
    avatar: avatar(u.avatar_template, 288),
    cover: absUrl(u.card_background_upload_url || u.profile_background_upload_url) || null,
    bio: u.bio_cooked ? cookedToTree(u.bio_cooked) : [],
    website: u.website ? {url: u.website, name: u.website_name || u.website} : null,
    location: u.location || null,
    joinedAt: u.created_at,
    flair: u.flair_url ? {url: absUrl(u.flair_url), name: u.flair_group_name || u.title || ''} : null,
  };
  return profile;
}

/**
 * Every topic in a category, newest first, without the pinned "About" topic.
 * Each entry is a Discourse topic-list item. `author` is the username of the
 * original poster. Stops after `limit` topics when it is given.
 */
export async function listCategory(categoryPath, limit = Infinity) {
  const topics = [];
  for (let page = 0; topics.length < limit; page++) {
    const {topic_list: list, users} = await getJson(`/c/${categoryPath}/l/latest.json?page=${page}`);
    const names = new Map((users ?? []).map((u) => [u.id, u.username]));
    for (const t of list.topics) {
      if (t.pinned) continue;
      const op = t.posters?.find((p) => p.description.includes('Original Poster'));
      topics.push({...t, author: op ? names.get(op.user_id) : null});
    }
    if (!list.more_topics_url) break;
  }
  return topics.slice(0, limit);
}
