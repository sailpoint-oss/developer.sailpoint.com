/**
 * Discourse is the content store for community pages. The reader never sees
 * the forum: this module calls the Discourse API from our own pages.
 *
 * In production the pages and Discourse share one origin (developer.sailpoint.com),
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

async function write<T>(method: 'POST' | 'PUT' | 'DELETE', path: string, body?: Record<string, unknown>): Promise<T> {
  return request<T>(path, {
    method,
    headers: {'Content-Type': 'application/json', 'X-CSRF-Token': await csrf()},
    body: body ? JSON.stringify(body) : undefined,
  });
}

// ---------------------------------------------------------------------------
// The reader
// ---------------------------------------------------------------------------

// One request per page load, however many components ask.
let currentUser: Promise<ForumUser | null> | null = null;
function loadUser(): Promise<ForumUser | null> {
  currentUser ??= request<{current_user?: {id: number; username: string; name?: string; avatar_template: string}}>(
    '/session/current.json',
  )
    .then(({current_user: u}) =>
      u ? {id: u.id, username: u.username, name: u.name || u.username, avatar: avatarUrl(u.avatar_template)} : null,
    )
    .catch(() => null);
  return currentUser;
}

/** The logged-in reader. `undefined` while loading, `null` when logged out. */
export function useForumUser(): ForumUser | null | undefined {
  const [user, setUser] = useState<ForumUser | null | undefined>(undefined);
  useEffect(() => {
    let cancelled = false;
    loadUser().then((u) => !cancelled && setUser(u));
    return () => {
      cancelled = true;
    };
  }, []);
  return user;
}

/**
 * Sends the reader to the SailPoint sign-in page and back to this page.
 * Discourse reads the `destination_url` cookie after sign-in and redirects
 * there. That works only when the page and the forum share an origin.
 */
export function logIn(): void {
  document.cookie = `destination_url=${encodeURIComponent(window.location.href)}; path=/; SameSite=Lax`;
  window.location.assign(`${DISCOURSE_BASE}/login`);
}

// ---------------------------------------------------------------------------
// Topics, likes and replies
// ---------------------------------------------------------------------------

interface TopicJson {
  details?: {notification_level?: number};
  post_stream: {posts: {id: number; actions_summary?: {id: number; acted?: boolean}[]}[]};
}

// The like state and the notification level both come from the topic. Load it once.
const topics = new Map<number, Promise<TopicJson>>();
function loadTopic(topicId: number): Promise<TopicJson> {
  if (!topics.has(topicId)) topics.set(topicId, request<TopicJson>(`/t/${topicId}.json`));
  return topics.get(topicId)!;
}

/** Ids of the posts in a topic that the logged-in reader liked. */
export async function likedPostIds(topicId: number): Promise<Set<number>> {
  const topic = await loadTopic(topicId);
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

// ---------------------------------------------------------------------------
// Notifications
// ---------------------------------------------------------------------------

/** Discourse notification levels. */
export const NotificationLevel = {
  muted: 0,
  regular: 1,
  tracking: 2,
  watching: 3,
  watchingFirstPost: 4,
} as const;

export type NotificationLevelValue = (typeof NotificationLevel)[keyof typeof NotificationLevel];

/**
 * What the reader subscribes to. Discourse supports these three. It has no
 * way to follow one person.
 */
export type NotificationTarget =
  | {type: 'category'; id: number}
  | {type: 'tag'; name: string}
  | {type: 'topic'; id: number};

/** The reader's current level for the target. */
export async function getNotificationLevel(target: NotificationTarget): Promise<NotificationLevelValue> {
  switch (target.type) {
    case 'category': {
      const r = await request<{category: {notification_level?: number}}>(`/c/${target.id}/show.json`);
      return (r.category.notification_level ?? NotificationLevel.regular) as NotificationLevelValue;
    }
    case 'tag': {
      const r = await request<{tag_notification: {notification_level?: number}}>(
        `/tag/${encodeURIComponent(target.name)}/notifications.json`,
      );
      return (r.tag_notification.notification_level ?? NotificationLevel.regular) as NotificationLevelValue;
    }
    case 'topic': {
      const r = await loadTopic(target.id);
      return (r.details?.notification_level ?? NotificationLevel.regular) as NotificationLevelValue;
    }
  }
}

export async function setNotificationLevel(target: NotificationTarget, level: NotificationLevelValue): Promise<void> {
  switch (target.type) {
    case 'category':
      await write('POST', `/category/${target.id}/notifications`, {notification_level: level});
      return;
    case 'tag':
      await write('PUT', `/tag/${encodeURIComponent(target.name)}/notifications`, {
        tag_notification: {notification_level: level},
      });
      return;
    case 'topic':
      await write('POST', `/t/${target.id}/notifications`, {notification_level: level});
  }
}
