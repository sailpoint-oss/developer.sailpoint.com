import {
  discourseBaseURL,
  expandProductTags,
} from '../util/util';
import { discourseFetch } from './discourseFetch';

export async function getTopPosts(): Promise<any[]> {
  try {
    const response = await fetch(discourseBaseURL() + 'top.json');
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getAmbassadors(expert: boolean, limit: number, offset: number): Promise<any[]> {
  try {
    const url = discourseBaseURL() +
      (expert
        ? `groups/expert_ambassadors/members.json?limit=${limit}&offset=${offset}`
        : `groups/ambassadors/members.json?limit=${limit}&offset=${offset}`);
    
    const response = await discourseFetch(url);
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getAmbassadorDetails(id: number[]): Promise<any[]> {
  try {
    const response = await discourseFetch(discourseBaseURL() + 'user-cards.json?user_ids=' + id.join(','));
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getAmbassadorPoints(targetIds?: Set<number>): Promise<any> {
  try {
    // The leaderboard paginates 100/page (server-fixed — it ignores limit),
    // sorted by total_score descending. When we know which ambassadors we're
    // after, stop as soon as every one has been seen instead of scanning the
    // whole community. Otherwise fall back to a >=300-point floor, so members
    // past the first page still get their points instead of defaulting to 0.
    // The floor (and hard page cap) also guarantee termination when a target
    // ambassador never appears on the leaderboard.
    const users: any[] = [];
    const remaining = targetIds ? new Set(targetIds) : null;
    for (let page = 0; page < 100; page++) {
      const response = await discourseFetch(
        discourseBaseURL() + `leaderboard/11.json?period=all_time&page=${page}`
      );
      const data = await response.json();
      const pageUsers = data?.users ?? [];
      if (!pageUsers.length) break;
      let hitFloor = false;
      for (const u of pageUsers) {
        if (u.total_score < 300) {
          hitFloor = true;
          break;
        }
        users.push(u);
        remaining?.delete(u.id);
      }
      if (hitFloor) break;
      if (remaining && remaining.size === 0) break; // every ambassador found
    }
    return { users };
  } catch (error) {
    return { users: [] };
  }
}

export async function checkImage(url: string): Promise<boolean> {
  try {
    await fetch(url);
    return true;
  } catch (error) {
    return false;
  }
}

export async function getUserTitle(primary_group_name: string): Promise<any> {
  try {
    const response = await fetch(discourseBaseURL() + 'g/' + primary_group_name + '.json');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getMarketplacePosts(
  tags?: string[],
  category?: string,
): Promise<any> {
  let filterCategory = 'colab';
  if (category && category !== 'colab') {
    filterCategory += `/${category}`;
  }

  // This route ignores `?tags=a,b` and `?tags=a+b` (both return nothing); the
  // repeated `tags[]=` form is what actually ORs them. Verified against the
  // live forum.
  const tagList = expandProductTags((tags ?? []).filter(Boolean));
  const query = tagList
    .map((tag) => `tags%5B%5D=${encodeURIComponent(tag)}`)
    .join('&');

  const url =
    discourseBaseURL() +
    `c/${filterCategory}/l/latest.json` +
    (query ? `?${query}` : '');

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getMarketplaceTopic(id: number): Promise<any> {
  try {
    const response = await fetch(discourseBaseURL() + 't/' + id + '.json');
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getMarketplaceTopicRaw(id: number): Promise<string> {
  try {
    const response = await fetch(discourseBaseURL() + 'raw/' + id + '.json');
    return await response.text();
  } catch (error) {
    return '';
  }
}

export async function getTags(): Promise<any> {
  try {
    const response = await fetch(discourseBaseURL() + 'tags.json');
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getCategories(): Promise<any> {
  try {
    const response = await fetch(discourseBaseURL() + 'categories.json');
    return await response.json();
  } catch (error) {
    return [];
  }
}
