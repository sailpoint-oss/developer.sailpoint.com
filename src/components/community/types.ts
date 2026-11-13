/**
 * Shared types for forum content. The blog (and later the video pages) store
 * Discourse topics as snapshots in this shape.
 */

/** One element of a post body. Strings are text nodes. */
export type BodyNode =
  | string
  | {
      t: string;
      a?: Record<string, string | undefined>;
      c?: BodyNode[];
    };

/** One post of a topic: the article itself or one comment. */
export interface ForumPost {
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

/** Discourse stores the content. Readers do not visit it directly. */
export const DISCOURSE_BASE = 'https://developer.sailpoint.com/discuss';

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
