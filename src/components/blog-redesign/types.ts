/**
 * Shape of the snapshot that scripts/fetch-blog-redesign-topic.mjs writes.
 */

import type {BodyNode, ForumPost} from '../community/types';

export type {BodyNode};
/** One post of a topic: the article (the first post) or a comment. */
export type Post = ForumPost;
export {DISCOURSE_BASE, formatShortDate} from '../community/types';

/** The Community Blog category on the forum. */
export const BLOG_CATEGORY_ID = 125;

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
  toc: TocEntry[];
  posts: Post[];
}

/** A post author. scripts/fetch-blog-redesign-topic.mjs saves one per author. */
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
}

/** One card on the landing page. The blog-redesign plugin builds these. */
export interface PostSummary {
  id: number;
  /** The route of the post page, for example /blog-redesign/my-post-slug. */
  path: string;
  title: string;
  excerpt: string;
  createdAt: string;
  tags: string[];
  readMinutes: number;
  comments: number;
  likes: number;
  hero: {src: string; alt: string} | null;
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
