import type {AuthorProfile, Topic, VideoTopic} from '../src/components/shared/types';

export const ORIGIN: string;
export const BASE: string;
export const BLOG_CATEGORY: string;
export const VIDEO_CATEGORY: string;

/** A Discourse topic-list item, with the username of the original poster. */
export interface ListedTopic {
  id: number;
  slug: string;
  bumped_at: string;
  posts_count: number;
  like_count: number;
  author: string | null;
  [key: string]: unknown;
}

export function getJson(path: string): Promise<any>;
export function fetchTopic(topicId: number, options?: {video?: false}): Promise<Topic>;
export function fetchTopic(topicId: number, options: {video: true}): Promise<VideoTopic>;
export function fetchAuthor(username: string): Promise<AuthorProfile>;
export function listCategory(categoryPath: string, limit?: number): Promise<ListedTopic[]>;
