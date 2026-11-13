/**
 * Shape of the snapshot that scripts/fetch-blog-redesign-topic.mjs writes.
 */

/** One element of a post body. Strings are text nodes. */
export type BodyNode =
  | string
  | {
      t: string;
      a?: Record<string, string | undefined>;
      c?: BodyNode[];
    };

export interface Category {
  id: number;
  name: string;
  slug: string;
  color: string;
  readRestricted: boolean;
  parent: Category | null;
}

export interface Post {
  id: number;
  number: number;
  username: string;
  name: string;
  avatar: string;
  userTitle: string | null;
  isAuthor: boolean;
  staff: boolean;
  flair: {url: string; name: string} | null;
  createdAt: string;
  replyTo: string | null;
  likes: number;
  url: string;
  words: number;
  body: BodyNode[];
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

/** Discourse stores the blog content. Readers do not visit it directly. */
export const DISCOURSE_BASE = 'https://developer.sailpoint.com/discuss';

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

/** "Jul 15" in the current year, "Jul 15, 2025" in other years. */
export const formatShortDate = (iso: string) => {
  const date = new Date(iso);
  const sameYear = date.getFullYear() === new Date().getFullYear();
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    ...(sameYear ? {} : {year: 'numeric'}),
  });
};

