import fs from 'fs';
import path from 'path';
import {normalizeUrl} from '@docusaurus/utils';
import type {LoadContext, Plugin} from '@docusaurus/types';
import type {
  AuthorProfile,
  BodyNode,
  PostSummary,
  Topic,
  VideoSummary,
  VideoTopic,
} from './src/components/shared/types';

/**
 * Routes for the blog and video pages:
 *   /blog          landing page with every post
 *   /blog/<slug>   one page for each post
 *   /blog/author/<username>   one page for each post or video author
 *   /blog/rss.xml and /blog/author/<username>/rss.xml (build only)
 *   /videos                 video landing page with every video
 *   /videos/<slug>          one page for each video
 *
 * The content comes from Discourse: every topic in the Community Blog and the
 * Video Library, and the profile of each author. The plugin reads it on every
 * build and start (scripts/discourse-content.mjs). Topics that did not
 * change since the last run come from a cache in
 * node_modules/.cache/discourse-content.
 * In the browser, the landing pages also load the newest topics, so a post
 * from after the build shows too (see ListingPage).
 *
 * If Discourse cannot be reached, the plugin uses everything in the cache.
 * With no cache, a production build fails, so that the site never deploys
 * an empty blog. The dev server starts with empty pages and a warning.
 */
const ROUTE = '/blog';
const VIDEO_ROUTE = '/videos';
const EXCERPT_LENGTH = 200;
/** Change this when the topic format changes, to drop the cached topics. */
const CACHE_VERSION = 3;
/** Author profiles change rarely. Fetch them again after this time. */
const AUTHOR_MAX_AGE_MS = 24 * 60 * 60 * 1000;

const textOf = (node: BodyNode): string =>
  typeof node === 'string' ? node : (node.c ?? []).map(textOf).join('');

/** True when the node holds a file attachment link ("Form.json (8.1 KB)"). */
const hasAttachment = (node: BodyNode): boolean =>
  typeof node === 'object' &&
  ((node.a?.class ?? '').split(' ').includes('attachment') || (node.c ?? []).some(hasAttachment));

/**
 * The first paragraph of prose in the article, cut at a word boundary. It
 * skips attachment lines and short labels such as "Form Definition Code:".
 */
function excerpt(body: BodyNode[]): string {
  const paragraphs = body
    .filter((n) => typeof n === 'object' && n.t === 'p' && !hasAttachment(n))
    .map((n) => textOf(n).replace(/\s+/g, ' ').trim())
    .filter((text) => text.length > 60);
  // Prefer a full sentence. A paragraph that ends in ":" introduces an image or code.
  const paragraph = paragraphs.find((text) => /[.!?)]$/.test(text)) ?? paragraphs[0];
  if (!paragraph || paragraph.length <= EXCERPT_LENGTH) return paragraph ?? '';
  return `${paragraph.slice(0, paragraph.lastIndexOf(' ', EXCERPT_LENGTH))}…`;
}

const readJson = <T>(file: string): T => JSON.parse(fs.readFileSync(file, 'utf8')) as T;

interface Source {
  posts: Topic[];
  videos: VideoTopic[];
  authors: AuthorProfile[];
}

/** Everything in the cache, for a run without Discourse. */
function fromCache(cacheDir: string): Source {
  const source: Source = {posts: [], videos: [], authors: []};
  if (!fs.existsSync(cacheDir)) return source;
  for (const name of fs.readdirSync(cacheDir)) {
    const file = path.join(cacheDir, name);
    if (/^topic-\d+\.json$/.test(name)) {
      const {topic} = readJson<{topic: Topic | VideoTopic}>(file);
      if ('video' in topic) source.videos.push(topic);
      else source.posts.push(topic);
    } else if (name.startsWith('author-')) {
      source.authors.push(readJson<AuthorProfile>(file));
    }
  }
  return source;
}

/**
 * Reads every blog post, video and author from Discourse. A topic that did
 * not change since the last run (same bump time, post count and like count)
 * comes from the cache. If one topic or profile fails, the plugin uses the
 * cached copy, or leaves it out.
 */
async function fromDiscourse(cacheDir: string): Promise<Source> {
  const discourse = await import('./scripts/discourse-content.mjs');
  fs.mkdirSync(cacheDir, {recursive: true});
  const cached = <T>(name: string): T | null => {
    const file = path.join(cacheDir, name);
    return fs.existsSync(file) ? readJson<T>(file) : null;
  };
  const cache = (name: string, data: unknown) =>
    fs.writeFileSync(path.join(cacheDir, name), JSON.stringify(data));

  const [blogList, videoList] = await Promise.all([
    discourse.listCategory(discourse.BLOG_CATEGORY),
    discourse.listCategory(discourse.VIDEO_CATEGORY),
  ]);
  let fetched = 0;
  const load = async <T extends Topic>(listed: (typeof blogList)[number], video: boolean): Promise<T | null> => {
    const name = `topic-${listed.id}.json`;
    const key = `${CACHE_VERSION}|${listed.bumped_at}|${listed.posts_count}|${listed.like_count}`;
    const hit = cached<{key: string; topic: T}>(name);
    if (hit?.key === key) return hit.topic;
    try {
      const topic = (await discourse.fetchTopic(listed.id, {video: video as true})) as unknown as T;
      cache(name, {key, topic});
      fetched++;
      return topic;
    } catch (error) {
      const fallback = hit?.topic ?? null;
      console.warn(
        `[discourse-content] Topic ${listed.id}: ${(error as Error).message}. ${fallback ? 'Using an older copy.' : 'Left out.'}`,
      );
      return fallback;
    }
  };
  const present = <T>(items: (T | null)[]) => items.filter((t): t is T => t !== null);
  const [posts, videos] = await Promise.all([
    Promise.all(blogList.map((t) => load<Topic>(t, false))).then(present),
    Promise.all(videoList.map((t) => load<VideoTopic>(t, true))).then(present),
  ]);

  // The first post of each author. It gives a minimal profile when the forum
  // has none (for example a renamed or deleted account), so every byline
  // link has an author page.
  const firstPosts = new Map<string, Topic['posts'][number]>();
  for (const topic of [...posts, ...videos]) {
    const article = topic.posts[0];
    if (!firstPosts.has(article.username)) firstPosts.set(article.username, article);
  }
  const minimalProfile = (username: string): AuthorProfile => {
    const article = firstPosts.get(username)!;
    return {
      fetchedAt: new Date().toISOString(),
      username,
      name: article.name,
      jobTitle: null,
      title: article.userTitle ?? null,
      avatar: article.avatar,
      cover: null,
      bio: [],
      website: null,
      location: null,
      joinedAt: article.createdAt,
      flair: article.flair ?? null,
      noForumProfile: true,
    };
  };
  const authors = present(
    await Promise.all(
      [...firstPosts.keys()].map(async (username) => {
        const name = `author-${username}.json`;
        const hit = cached<AuthorProfile>(name);
        if (hit && Date.now() - Date.parse(hit.fetchedAt) < AUTHOR_MAX_AGE_MS) return hit;
        try {
          const profile = await discourse.fetchAuthor(username);
          cache(name, profile);
          return profile;
        } catch (error) {
          console.warn(
            `[discourse-content] Author ${username}: ${(error as Error).message}. ${hit ? 'Using an older copy.' : 'Using the name and avatar from the post.'}`,
          );
          return hit ?? minimalProfile(username);
        }
      }),
    ),
  );

  console.log(
    `[discourse-content] ${posts.length} posts, ${videos.length} videos and ${authors.length} authors from Discourse (${fetched} topics fetched, the rest cached).`,
  );
  return {posts, videos, authors};
}

/** Discourse slugs are not unique. Adds the id when two topics share one. */
function slugger(): (topic: Topic) => string {
  const used = new Set<string>();
  return (topic) => {
    const slug = used.has(topic.slug) ? `${topic.slug}-${topic.id}` : topic.slug;
    used.add(slug);
    return slug;
  };
}

const xml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** An RSS 2.0 feed of the given posts, newest first. */
function rssFeed(siteUrl: string, title: string, link: string, posts: PostSummary[]): string {
  const items = posts
    .map(
      (p) => `    <item>
      <title>${xml(p.title)}</title>
      <link>${xml(siteUrl + p.path)}</link>
      <guid isPermaLink="true">${xml(siteUrl + p.path)}</guid>
      <pubDate>${new Date(p.createdAt).toUTCString()}</pubDate>
      <dc:creator>${xml(p.author.name)}</dc:creator>
      <description>${xml(p.excerpt)}</description>
${p.tags.map((t) => `      <category>${xml(t)}</category>`).join('\n')}
    </item>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${xml(title)}</title>
    <link>${xml(siteUrl + link)}</link>
    <description>Posts from the SailPoint Developer Community blog.</description>
${items}
  </channel>
</rss>
`;
}

interface Content {
  posts: {topic: Topic; summary: PostSummary}[];
  videos: {topic: VideoTopic; summary: VideoSummary}[];
  authors: AuthorProfile[];
}

const newestFirst = <T extends Topic>(topics: T[]) =>
  [...topics].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

export default function discourseContentPlugin(context: LoadContext): Plugin<Content> {
  const blogPath = normalizeUrl([context.baseUrl, ROUTE]);
  const videosPath = normalizeUrl([context.baseUrl, VIDEO_ROUTE]);
  const siteUrl = context.siteConfig.url.replace(/\/$/, '');
  const cacheDir = path.join(context.siteDir, 'node_modules/.cache/discourse-content');

  return {
    name: 'discourse-content',

    async loadContent() {
      let source: Source;
      try {
        source = await fromDiscourse(cacheDir);
      } catch (error) {
        const reason = `Cannot read Discourse (${(error as Error).message}).`;
        source = fromCache(cacheDir);
        const empty = source.posts.length === 0 && source.videos.length === 0;
        if (empty && process.env.NODE_ENV === 'production') {
          throw new Error(`[discourse-content] ${reason} The cache is empty, so the build stops.`);
        }
        console.warn(
          `[discourse-content] ${reason} ${empty ? 'The cache is empty, so the pages are empty.' : 'Using the cached topics.'}`,
        );
      }

      const postSlug = slugger();
      const posts = newestFirst(source.posts).map((topic) => {
        const slug = postSlug(topic);
        const article = topic.posts[0];
        return {
          topic,
          summary: {
            id: topic.id,
            path: normalizeUrl([blogPath, slug]),
            title: topic.title,
            excerpt: excerpt(article.body),
            createdAt: topic.createdAt,
            tags: topic.tags,
            readMinutes: topic.readMinutes,
            comments: topic.posts.length - 1,
            likes: topic.likeCount,
            thumbnail: topic.thumbnail,
            author: {name: article.name, username: article.username, avatar: article.avatar},
          },
        };
      });
      const videoSlug = slugger();
      const videos = newestFirst(source.videos).map((topic) => {
        const article = topic.posts[0];
        return {
          topic,
          summary: {
            id: topic.id,
            path: normalizeUrl([videosPath, videoSlug(topic)]),
            title: topic.title,
            excerpt: excerpt(article.body),
            createdAt: topic.createdAt,
            tags: topic.tags,
            comments: topic.posts.length - 1,
            likes: topic.likeCount,
            // A video without a player keeps the topic image as its poster.
            thumbnail: topic.video?.thumbnail ?? topic.thumbnail ?? null,
            author: {name: article.name, username: article.username, avatar: article.avatar},
          },
        };
      });
      return {posts, videos, authors: source.authors};
    },

    async contentLoaded({content, actions}) {
      const postsModule = await actions.createData(
        'discourse-content-posts.json',
        JSON.stringify(content.posts.map((c) => c.summary)),
      );
      const videosModule = await actions.createData(
        'discourse-content-videos.json',
        JSON.stringify(content.videos.map((c) => c.summary)),
      );
      actions.addRoute({
        path: blogPath,
        component: '@site/src/components/blog/LandingPage',
        modules: {posts: postsModule},
        exact: true,
      });
      actions.addRoute({
        path: videosPath,
        component: '@site/src/components/video-library/VideoLandingPage',
        modules: {videos: videosModule},
        exact: true,
      });
      for (const {topic, summary} of content.videos) {
        const topicModule = await actions.createData(`video-${topic.id}.json`, JSON.stringify(topic));
        actions.addRoute({
          path: summary.path,
          component: '@site/src/components/video-library/VideoPage',
          // `posts` and `videos` let the page turn links to other topics into site links.
          modules: {topic: topicModule, videos: videosModule, posts: postsModule},
          exact: true,
        });
      }
      for (const {topic, summary} of content.posts) {
        const topicModule = await actions.createData(`post-${topic.id}.json`, JSON.stringify(topic));
        actions.addRoute({
          path: summary.path,
          component: '@site/src/components/blog/PostPage',
          // `posts` lets the page turn links to other posts into blog links.
          modules: {topic: topicModule, posts: postsModule},
          exact: true,
        });
      }
      for (const author of content.authors) {
        const authorModule = await actions.createData(`author-${author.username}.json`, JSON.stringify(author));
        actions.addRoute({
          path: normalizeUrl([blogPath, 'author', author.username]),
          component: '@site/src/components/shared/AuthorPage',
          modules: {author: authorModule, posts: postsModule, videos: videosModule},
          exact: true,
        });
      }
    },

    // RSS feeds for the whole blog and for each author. They exist only in a
    // production build (`npm run build`), not on the dev server.
    async postBuild({outDir, content}) {
      const summaries = content.posts.map((p) => p.summary);
      const write = (route: string, feed: string) => {
        const dir = path.join(outDir, route);
        fs.mkdirSync(dir, {recursive: true});
        fs.writeFileSync(path.join(dir, 'rss.xml'), feed);
      };
      write(ROUTE, rssFeed(siteUrl, 'SailPoint Developer Community Blog', blogPath, summaries));
      for (const {username, name} of content.authors) {
        const route = path.posix.join(ROUTE, 'author', username);
        const posts = summaries.filter((p) => p.author.username === username);
        // The feeds list blog posts. Authors with only videos have none.
        if (posts.length === 0) continue;
        write(route, rssFeed(siteUrl, `${name} on the SailPoint Developer Community Blog`, `/${route}`, posts));
      }
    },
  };
}
