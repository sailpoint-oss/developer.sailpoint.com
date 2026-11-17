import fs from 'fs';
import path from 'path';
import {normalizeUrl} from '@docusaurus/utils';
import type {LoadContext, Plugin} from '@docusaurus/types';
import type {AuthorProfile, BodyNode, PostSummary, Topic} from './src/components/blog-redesign/types';

/**
 * Routes for the blog redesign prototype:
 *   /blog-redesign          landing page with every saved post
 *   /blog-redesign/<slug>   one page for each saved post
 *   /blog-redesign/author/<username>   one page for each post author
 *   /blog-redesign/rss.xml and /blog-redesign/author/<username>/rss.xml (build only)
 *
 * Each JSON file in DATA_DIR is one post. To add or refresh posts, run
 * scripts/fetch-blog-redesign-topic.mjs.
 */
const DATA_DIR = path.join(__dirname, 'src/components/blog-redesign/data');
const AUTHOR_DIR = path.join(DATA_DIR, 'authors');
const ROUTE = '/blog-redesign';
const EXCERPT_LENGTH = 200;

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

function readTopics(): {file: string; topic: Topic}[] {
  if (!fs.existsSync(DATA_DIR)) return [];
  return fs
    .readdirSync(DATA_DIR)
    .filter((name) => /^topic-\d+\.json$/.test(name))
    .map((name) => {
      const file = path.join(DATA_DIR, name);
      return {file, topic: JSON.parse(fs.readFileSync(file, 'utf8')) as Topic};
    })
    .sort((a, b) => b.topic.createdAt.localeCompare(a.topic.createdAt));
}

/** The author pages: one for each saved profile in AUTHOR_DIR. */
function readAuthors(): {file: string; username: string; name: string}[] {
  if (!fs.existsSync(AUTHOR_DIR)) return [];
  return fs
    .readdirSync(AUTHOR_DIR)
    .filter((name) => name.endsWith('.json'))
    .map((name) => {
      const file = path.join(AUTHOR_DIR, name);
      const author = JSON.parse(fs.readFileSync(file, 'utf8')) as AuthorProfile;
      return {file, username: author.username, name: author.name};
    });
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
  posts: {file: string; summary: PostSummary}[];
  authors: {file: string; username: string; name: string}[];
}

export default function blogRedesignPlugin(context: LoadContext): Plugin<Content> {
  const blogPath = normalizeUrl([context.baseUrl, ROUTE]);
  const siteUrl = context.siteConfig.url.replace(/\/$/, '');

  return {
    name: 'blog-redesign',

    getPathsToWatch() {
      return [path.join(DATA_DIR, '*.json'), path.join(AUTHOR_DIR, '*.json')];
    },

    async loadContent() {
      const used = new Set<string>();
      const posts = readTopics().map(({file, topic}) => {
        // Discourse slugs are not unique. Add the id when two posts share one.
        const slug = used.has(topic.slug) ? `${topic.slug}-${topic.id}` : topic.slug;
        used.add(slug);
        const article = topic.posts[0];
        return {
          file,
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
            hero: topic.hero,
            author: {name: article.name, username: article.username, avatar: article.avatar},
          },
        };
      });
      return {posts, authors: readAuthors()};
    },

    async contentLoaded({content, actions}) {
      const postsModule = await actions.createData(
        'blog-redesign-posts.json',
        JSON.stringify(content.posts.map((c) => c.summary)),
      );
      actions.addRoute({
        path: blogPath,
        component: '@site/src/components/blog-redesign/LandingPage',
        modules: {posts: postsModule},
        exact: true,
      });
      for (const {file, summary} of content.posts) {
        actions.addRoute({
          path: summary.path,
          component: '@site/src/components/blog-redesign/PostPage',
          // `posts` lets the page turn links to other saved posts into blog links.
          modules: {topic: file, posts: postsModule},
          exact: true,
        });
      }
      for (const {file, username} of content.authors) {
        actions.addRoute({
          path: normalizeUrl([blogPath, 'author', username]),
          component: '@site/src/components/blog-redesign/AuthorPage',
          modules: {author: file, posts: postsModule},
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
        write(route, rssFeed(siteUrl, `${name} on the SailPoint Developer Community Blog`, `/${route}`, posts));
      }
    },
  };
}
