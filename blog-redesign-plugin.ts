import fs from 'fs';
import path from 'path';
import {normalizeUrl} from '@docusaurus/utils';
import type {LoadContext, Plugin} from '@docusaurus/types';
import type {BodyNode, PostSummary, Topic} from './src/components/blog-redesign/types';

/**
 * Routes for the blog redesign prototype:
 *   /blog-redesign          landing page with every saved post
 *   /blog-redesign/<slug>   one page for each saved post
 *
 * Each JSON file in DATA_DIR is one post. To add or refresh posts, run
 * scripts/fetch-blog-redesign-topic.mjs.
 */
const DATA_DIR = path.join(__dirname, 'src/components/blog-redesign/data');
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

export default function blogRedesignPlugin(context: LoadContext): Plugin<{file: string; summary: PostSummary}[]> {
  return {
    name: 'blog-redesign',

    getPathsToWatch() {
      return [path.join(DATA_DIR, '*.json')];
    },

    async loadContent() {
      const used = new Set<string>();
      return readTopics().map(({file, topic}) => {
        // Discourse slugs are not unique. Add the id when two posts share one.
        const slug = used.has(topic.slug) ? `${topic.slug}-${topic.id}` : topic.slug;
        used.add(slug);
        const article = topic.posts[0];
        return {
          file,
          summary: {
            id: topic.id,
            path: normalizeUrl([context.baseUrl, ROUTE, slug]),
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
    },

    async contentLoaded({content, actions}) {
      const postsModule = await actions.createData(
        'blog-redesign-posts.json',
        JSON.stringify(content.map((c) => c.summary)),
      );
      actions.addRoute({
        path: normalizeUrl([context.baseUrl, ROUTE]),
        component: '@site/src/components/blog-redesign/LandingPage',
        modules: {posts: postsModule},
        exact: true,
      });
      for (const {file, summary} of content) {
        actions.addRoute({
          path: summary.path,
          component: '@site/src/components/blog-redesign/PostPage',
          // `posts` lets the page turn links to other saved posts into blog links.
          modules: {topic: file, posts: postsModule},
          exact: true,
        });
      }
    },
  };
}
