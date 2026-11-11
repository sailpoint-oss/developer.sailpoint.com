import {
  discourseBaseURL,
  discourseFilterQuery,
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

type Topic = {
  id: number;
  title: string;
  slug: string;
  posts_count: number;
  created_at: string;
  // Add other fields as needed
};

type User = {
  id: number;
  username: string;
  name?: string;
  avatar_template: string;
  // Add other fields as needed
};

type DiscourseResponse = {
  users: User[];
  topic_list: {
    topics: Topic[];
  };
};

export async function getBlogPosts(tags: string | string[]): Promise<DiscourseResponse | []> {
  let url: string;
  let allData: DiscourseResponse = {
    users: [],
    topic_list: {
      topics: [],
    },
  };

  const tagList = (Array.isArray(tags) ? tags : tags ? [tags] : []).filter(Boolean);

  if (tagList.length === 0) {
    url = `${discourseBaseURL()}c/content/community-blog/125.json`;
  } else {
    // /filter.json is the only listing endpoint that supports OR across tags,
    // which the product tag now needs. It returns the same shape (topic_list +
    // users) as the old /tags/c route.
    url = `${discourseBaseURL()}filter.json?q=${encodeURIComponent(
      discourseFilterQuery('community-blog', tagList),
    )}`;
  }

  try {
    let page = 0;

    // Page until a short page arrives. The hard cap is a backstop so a change in
    // Discourse's paging behaviour can never spin this loop forever.
    while (page < 50) {
      const separator = url.includes('?') ? '&' : '?';
      const pageUrl = page === 0 ? url : `${url}${separator}page=${page}`;
      const response = await fetch(pageUrl);
      const data: DiscourseResponse = await response.json();

      const topics = data.topic_list?.topics ?? [];
      allData.topic_list.topics = allData.topic_list.topics.concat(topics);
      if (Array.isArray(data.users)) {
        allData.users = allData.users.concat(data.users);
      }

      if (topics.length < 30) {
        break;
      }

      page++;
    }

    return allData;
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return [];
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

interface VideoPostResponse {
  users: any[];
  topic_list: {
    topics: any[];
  };
}

export async function getVideoPosts(tags?: string[]): Promise<VideoPostResponse | []> {
  let url: string = '';
  let allData: VideoPostResponse = {
    users: [],
    topic_list: {
      topics: [],
    },
  };

  const tagList = (tags ?? []).filter(Boolean);

  if (tagList.length > 0) {
    // One clause per tag ANDs them, while the product tags collapse into a
    // single OR clause -- so a product + video-type selection still intersects.
    // The old code joined every tag with '+', which the /tags/c route does not
    // parse at all (it returned zero results for any multi-tag selection).
    url = `${discourseBaseURL()}filter.json?q=${encodeURIComponent(
      discourseFilterQuery('video-library', tagList),
    )}`;
  } else {
    url = `${discourseBaseURL()}c/content/video-library/l/latest.json`;
  }

  try {
    let page = 0;
    while (page < 50) {
      const separator = url.includes('?') ? '&' : '?';
      const pageUrl = page === 0 ? url : `${url}${separator}page=${page}`;
      const response = await fetch(pageUrl);
      const data: VideoPostResponse = await response.json();

      const topics = data.topic_list?.topics ?? [];
      allData.topic_list.topics = [...allData.topic_list.topics, ...topics];
      if (Array.isArray(data.users)) {
        allData.users = [...allData.users, ...data.users];
      }

      if (topics.length < 30) {
        // Less than 30 topics means it's the last page
        break;
      }
      page++;
    }
    return allData;
  } catch (error) {
    console.error("Error fetching video posts:", error);
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

export async function getTopic(id: number): Promise<any> {
  try {
    const response = await fetch(discourseBaseURL() + 't/' + id + '.json');
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
