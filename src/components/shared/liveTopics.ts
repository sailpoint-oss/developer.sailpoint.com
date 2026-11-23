import {useEffect, useState} from 'react';
import type {ListingItem} from './ListingPage';

/**
 * The landing pages come from the build. When a page opens, this hook loads
 * the newest topics of the category from Discourse and:
 *   - adds topics from after the build. They have no page on the site yet, so
 *     their cards link to the forum until the next build.
 *   - updates the comment counts of the other cards.
 *
 * In production the forum is on the same origin (/discuss). On localhost the
 * forum blocks the request (CORS), and the page keeps the build content.
 */

const ORIGIN = 'https://developer.sailpoint.com';
const BASE = `${ORIGIN}/discuss`;

interface ListedTopic {
  id: number;
  slug: string;
  title: string;
  excerpt?: string;
  created_at: string;
  posts_count: number;
  pinned: boolean;
  image_url: string | null;
  tags?: (string | {name: string})[];
  posters?: {user_id: number; description: string}[];
}

interface ListedUser {
  id: number;
  username: string;
  name: string | null;
  avatar_template: string;
}

const absolute = (url: string) =>
  url.startsWith('//') ? `https:${url}` : url.startsWith('/') ? `${ORIGIN}${url}` : url;

/** Discourse excerpts hold HTML entities, for example "&hellip;". */
function plainText(html: string): string {
  const text = new DOMParser().parseFromString(html, 'text/html').body.textContent ?? '';
  return text.replace(/\s+/g, ' ').trim();
}

function toItem(topic: ListedTopic, users: Map<number, ListedUser>, video: boolean): ListingItem {
  const op = topic.posters?.find((p) => p.description.includes('Original Poster'));
  const user = op ? users.get(op.user_id) : undefined;
  return {
    id: topic.id,
    path: `${BASE}/t/${topic.slug}/${topic.id}`,
    title: topic.title,
    excerpt: topic.excerpt ? plainText(topic.excerpt) : '',
    createdAt: topic.created_at,
    tags: (topic.tags ?? []).map((t) => (typeof t === 'string' ? t : t.name)),
    comments: topic.posts_count - 1,
    author: {
      name: user?.name || user?.username || '',
      username: user?.username ?? '',
      avatar: user ? absolute(user.avatar_template.replace('{size}', '96')) : '',
    },
    thumbnail: topic.image_url,
    video,
  };
}

export function useLiveTopics(
  items: ListingItem[],
  categoryPath: string,
  video: boolean,
): ListingItem[] {
  const [live, setLive] = useState(items);
  useEffect(() => {
    setLive(items);
    const controller = new AbortController();
    (async () => {
      const res = await fetch(`${BASE}/c/${categoryPath}/l/latest.json`, {
        headers: {Accept: 'application/json'},
        signal: controller.signal,
      });
      if (!res.ok) return;
      const data = await res.json();
      const topics: ListedTopic[] = (data.topic_list?.topics ?? []).filter((t: ListedTopic) => !t.pinned);
      const users = new Map<number, ListedUser>((data.users ?? []).map((u: ListedUser) => [u.id, u]));
      const listed = new Map(topics.map((t) => [t.id, t]));
      const known = new Set(items.map((item) => item.id));

      const updated = items.map((item) => {
        const topic = listed.get(item.id);
        return topic && topic.posts_count - 1 !== item.comments
          ? {...item, comments: topic.posts_count - 1}
          : item;
      });
      const added = topics.filter((t) => !known.has(t.id)).map((t) => toItem(t, users, video));
      if (added.length === 0 && updated.every((item, i) => item === items[i])) return;
      setLive(
        [...added, ...updated].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
      );
    })().catch(() => {
      // No forum (offline, CORS on localhost). Keep the build content.
    });
    return () => controller.abort();
  }, [items, categoryPath, video]);
  return live;
}
