/**
 * Discourse is the content store for the blog. The reader never sees the
 * forum: this module calls the Discourse API from the blog page.
 *
 * In production the blog and Discourse share one origin (developer.sailpoint.com),
 * so the browser sends the forum session cookie with these requests. On
 * localhost the forum blocks the requests (CORS), so the page acts as if the
 * reader is logged out.
 */
import {useEffect, useState} from 'react';
import {DISCOURSE_BASE} from './types';

export interface ForumUser {
  id: number;
  username: string;
  name: string;
  avatar: string;
}

/** A reply that Discourse returns after the reader posts one. */
export interface NewReply {
  id: number;
  number: number;
  username: string;
  name: string;
  avatar: string;
  createdAt: string;
  /** HTML that Discourse made from the Markdown. Discourse sanitizes it. */
  cooked: string;
}

const LIKE = 2; // Discourse post action type for "like".

const avatarUrl = (template: string, size = 96) => {
  const url = template.replace('{size}', String(size));
  return url.startsWith('/') ? `https://developer.sailpoint.com${url}` : url;
};

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${DISCOURSE_BASE}${path}`, {
    credentials: 'include',
    ...init,
    headers: {Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest', ...init.headers},
  });
  if (!res.ok) throw new Error(`${path}: HTTP ${res.status}`);
  return res.status === 204 ? (undefined as T) : res.json();
}

let csrfToken: Promise<string> | null = null;
function csrf(): Promise<string> {
  csrfToken ??= request<{csrf: string}>('/session/csrf.json').then((r) => r.csrf);
  return csrfToken;
}

async function write<T>(method: 'POST' | 'DELETE', path: string, body?: Record<string, unknown>): Promise<T> {
  return request<T>(path, {
    method,
    headers: {'Content-Type': 'application/json', 'X-CSRF-Token': await csrf()},
    body: body ? JSON.stringify(body) : undefined,
  });
}

/** The logged-in reader. `undefined` while loading, `null` when logged out. */
export function useForumUser(): ForumUser | null | undefined {
  const [user, setUser] = useState<ForumUser | null | undefined>(undefined);
  useEffect(() => {
    let cancelled = false;
    request<{current_user?: {id: number; username: string; name?: string; avatar_template: string}}>(
      '/session/current.json',
    )
      .then(({current_user: u}) =>
        u ? {id: u.id, username: u.username, name: u.name || u.username, avatar: avatarUrl(u.avatar_template)} : null,
      )
      .catch(() => null)
      .then((u) => !cancelled && setUser(u));
    return () => {
      cancelled = true;
    };
  }, []);
  return user;
}

/** Ids of the posts in a topic that the logged-in reader liked. */
export async function likedPostIds(topicId: number): Promise<Set<number>> {
  const topic = await request<{post_stream: {posts: {id: number; actions_summary?: {id: number; acted?: boolean}[]}[]}}>(
    `/t/${topicId}.json`,
  );
  return new Set(
    topic.post_stream.posts.filter((p) => p.actions_summary?.some((a) => a.id === LIKE && a.acted)).map((p) => p.id),
  );
}

export const likePost = (postId: number) => write('POST', '/post_actions.json', {id: postId, post_action_type_id: LIKE});

export const unlikePost = (postId: number) =>
  write('DELETE', `/post_actions/${postId}.json?post_action_type_id=${LIKE}`);

export async function createReply(topicId: number, raw: string, replyTo?: number): Promise<NewReply> {
  const p = await write<{
    id: number;
    post_number: number;
    username: string;
    name?: string;
    avatar_template: string;
    created_at: string;
    cooked: string;
  }>('POST', '/posts.json', {topic_id: topicId, raw, reply_to_post_number: replyTo});
  return {
    id: p.id,
    number: p.post_number,
    username: p.username,
    name: p.name || p.username,
    avatar: avatarUrl(p.avatar_template),
    createdAt: p.created_at,
    cooked: p.cooked,
  };
}

/**
 * Sends the reader to the SailPoint sign-in page and back to this page.
 * Discourse reads the `destination_url` cookie after sign-in and redirects
 * there. That works only when the blog and the forum share an origin.
 */
export function logIn(): void {
  document.cookie = `destination_url=${encodeURIComponent(window.location.href)}; path=/; SameSite=Lax`;
  window.location.assign(`${DISCOURSE_BASE}/login`);
}
