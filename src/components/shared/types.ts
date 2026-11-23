/**
 * Shape of the topic snapshots that scripts/blog-redesign-discourse.mjs makes.
 */

import type {BodyNode, ForumPost} from '../community/types';

export type {BodyNode};
/** One post of a topic: the article (the first post) or a comment. */
export type Post = ForumPost;
export {DISCOURSE_BASE, formatShortDate} from '../community/types';

/** The Community Blog category on the forum. */
export const BLOG_CATEGORY_ID = 125;

/** The Video Library category on the forum. */
export const VIDEO_CATEGORY_ID = 127;

export interface Category {
  id: number;
  name: string;
  slug: string;
  color: string;
  readRestricted: boolean;
  parent: Category | null;
}

export interface TocEntry {
  id: string;
  title: string;
}

export interface Topic {
  fetchedAt: string;
  id: number;
  slug: string;
  title: string;
  url: string;
  createdAt: string;
  views: number;
  likeCount: number;
  tags: string[];
  category: Category | null;
  readMinutes: number;
  hero: {src: string; alt: string} | null;
  /** The topic image for cards. `null` when the topic has no image. */
  thumbnail: string | null;
  toc: TocEntry[];
  posts: Post[];
}

/** The player of a Video Library post. */
export interface VideoPlayer {
  provider: 'vidyard' | 'youtube' | 'embed';
  /** The video id at the provider. `null` for other hosts. */
  id: string | null;
  /** The URL to load in the player <iframe>. */
  embed: string;
  /** The poster image. `null` when the post has none. */
  thumbnail: string | null;
}

/** A Video Library topic. The script saves them with --videos. */
export interface VideoTopic extends Topic {
  /** `null` when the script found no player in the post. */
  video: VideoPlayer | null;
}

/** A post or video author. scripts/blog-redesign-discourse.mjs makes one per author. */
export interface AuthorProfile {
  fetchedAt: string;
  username: string;
  name: string;
  /** The job title the member gave on the forum profile. */
  jobTitle: string | null;
  /** The community title, for example "Expert Ambassador". */
  title: string | null;
  avatar: string;
  cover: string | null;
  bio: BodyNode[];
  website: {url: string; name: string} | null;
  location: string | null;
  joinedAt: string;
  flair: {url: string; name: string} | null;
  /**
   * True when the forum has no profile for the member (for example a renamed
   * or deleted account). The page is built from their post instead.
   */
  noForumProfile?: boolean;
}

/** One card on the landing page. The blog-redesign plugin builds these. */
export interface PostSummary {
  id: number;
  /** The route of the post page, for example /blog/my-post-slug. */
  path: string;
  title: string;
  excerpt: string;
  createdAt: string;
  tags: string[];
  readMinutes: number;
  comments: number;
  likes: number;
  /** The topic image from Discourse. `null` when the post has none. */
  thumbnail: string | null;
  author: {name: string; username: string; avatar: string};
}

/** One card on the videos landing page. The blog-redesign plugin builds these. */
export interface VideoSummary {
  id: number;
  /** The route of the video page, for example /videos/my-video-slug. */
  path: string;
  title: string;
  excerpt: string;
  createdAt: string;
  tags: string[];
  comments: number;
  likes: number;
  thumbnail: string | null;
  author: {name: string; username: string; avatar: string};
}

/** "Jul 14, 2026". Uses the reader's time zone. */
export const formatLongDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

/** "November 2024". */
export const formatMonthYear = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
