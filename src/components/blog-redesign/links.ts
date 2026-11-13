/**
 * Keeps readers on the blog. Post bodies come from Discourse, so their links
 * point at forum URLs. These rules change them to blog URLs where the blog
 * has a page for the target.
 */
import {createContext} from 'react';

export const BLOG_PATH = '/blog-redesign';

export interface BlogLinks {
  /** Topic id -> blog path, for every post that has a blog page. */
  postPaths: Record<number, string>;
  /** Usernames that have an author page. */
  authors: Set<string>;
}

export const BlogLinksContext = createContext<BlogLinks>({postPaths: {}, authors: new Set()});

/** Builds the link data from the list of saved posts. */
export const blogLinks = (posts: {id: number; path: string; author: {username: string}}[]): BlogLinks => ({
  postPaths: Object.fromEntries(posts.map((p) => [p.id, p.path])),
  authors: new Set(posts.map((p) => p.author.username)),
});

export const tagPath = (tag: string) => `${BLOG_PATH}?tag=${encodeURIComponent(tag)}`;
export const authorPath = (username: string) => `${BLOG_PATH}/author/${encodeURIComponent(username)}`;

const SITE = /^https?:\/\/developer\.sailpoint\.com(?=\/|$)/;
const TOPIC = /^\/discuss\/t\/(?:[^/]+\/)?(\d+)(?:\/(\d+))?\/?(?:[?#].*)?$/;
const BLOG_CATEGORY = /^\/discuss\/c\/(?:content\/)?community-blog(?:\/125)?\/?$/;
const TAG = /^\/discuss\/tag\/([^/?#]+)/;

/**
 * Returns the URL to use for a link in a post body, and whether it leaves
 * the site (and opens in a new tab).
 */
export function resolveLink(href: string, postPaths: Record<number, string>): {href: string; external: boolean} {
  const path = href.replace(SITE, '');
  if (path === href && /^https?:/.test(href)) return {href, external: true};

  const topic = path.match(TOPIC);
  if (topic && postPaths[Number(topic[1])]) {
    const postNumber = Number(topic[2] ?? 1);
    return {href: postPaths[Number(topic[1])] + (postNumber > 1 ? `#post-${postNumber}` : ''), external: false};
  }
  if (BLOG_CATEGORY.test(path)) return {href: BLOG_PATH, external: false};
  const tag = path.match(TAG);
  if (tag) return {href: tagPath(decodeURIComponent(tag[1])), external: false};

  // Other forum pages (other topics, file downloads) keep their full URL, so
  // they also work from localhost. Like the rest of the site, they stay on
  // developer.sailpoint.com and open in the same tab.
  if (path.startsWith('/discuss')) return {href: `https://developer.sailpoint.com${path}`, external: false};
  return {href: path || '/', external: false};
}
