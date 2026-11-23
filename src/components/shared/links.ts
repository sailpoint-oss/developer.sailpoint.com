/**
 * Keeps readers on the blog. Post bodies come from Discourse, so their links
 * point at forum URLs. These rules change them to blog URLs where the blog
 * has a page for the target.
 */
import type {CommunityLinks, ResolvedLink} from '../community/links';

export const BLOG_PATH = '/blog';
export const VIDEOS_PATH = '/videos';

export const tagPath = (tag: string) => `${BLOG_PATH}?tag=${encodeURIComponent(tag)}`;
export const videoTagPath = (tag: string) => `${VIDEOS_PATH}?tag=${encodeURIComponent(tag)}`;
export const authorPath = (username: string) => `${BLOG_PATH}/author/${encodeURIComponent(username)}`;
/** The member's profile on the forum. */
export const forumProfileUrl = (username: string) =>
  `https://developer.sailpoint.com/discuss/u/${encodeURIComponent(username)}/summary`;

const SITE = /^https?:\/\/developer\.sailpoint\.com(?=\/|$)/;
const TOPIC = /^\/discuss\/t\/(?:[^/]+\/)?(\d+)(?:\/(\d+))?\/?(?:[?#].*)?$/;
const BLOG_CATEGORY = /^\/discuss\/c\/(?:content\/)?community-blog(?:\/125)?\/?$/;
const VIDEO_CATEGORY = /^\/discuss\/c\/(?:content\/)?video-library(?:\/127)?\/?$/;
const TAG = /^\/discuss\/tag\/([^/?#]+)/;

/**
 * Returns the URL to use for a link in a post body, and whether it leaves
 * the site (and opens in a new tab).
 */
function resolveLink(href: string, postPaths: Record<number, string>): ResolvedLink {
  const path = href.replace(SITE, '');
  if (path === href && /^https?:/.test(href)) return {href, external: true};

  const topic = path.match(TOPIC);
  if (topic && postPaths[Number(topic[1])]) {
    const postNumber = Number(topic[2] ?? 1);
    return {href: postPaths[Number(topic[1])] + (postNumber > 1 ? `#post-${postNumber}` : ''), external: false};
  }
  if (BLOG_CATEGORY.test(path)) return {href: BLOG_PATH, external: false};
  if (VIDEO_CATEGORY.test(path)) return {href: VIDEOS_PATH, external: false};
  const tag = path.match(TAG);
  if (tag) return {href: tagPath(decodeURIComponent(tag[1])), external: false};

  // Other forum pages (other topics, file downloads) keep their full URL, so
  // they also work from localhost. Like the rest of the site, they stay on
  // developer.sailpoint.com and open in the same tab.
  if (path.startsWith('/discuss')) return {href: `https://developer.sailpoint.com${path}`, external: false};
  return {href: path || '/', external: false};
}

type Linkable = {id: number; path: string; author: {username: string}};

/**
 * The link rules for blog and video pages. Give them to the community
 * components with <CommunityLinksContext.Provider value={blogLinks(posts, videos)}>.
 *
 * - Links to posts and videos on the site go to their page.
 * - Members who made a post or video link to their author page.
 */
export function blogLinks(posts: Linkable[], videos: Linkable[] = []): CommunityLinks {
  const all = [...posts, ...videos];
  const postPaths: Record<number, string> = Object.fromEntries(all.map((p) => [p.id, p.path]));
  const authors = new Set(all.map((p) => p.author.username));
  return {
    resolveHref: (href) => resolveLink(href, postPaths),
    profileHref: (username) => (authors.has(username) ? authorPath(username) : null),
  };
}
