import { discourseBaseURL } from '../util/util';
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

  const formattedTags = Array.isArray(tags) ? tags.join('+') : tags;

  if (!formattedTags || formattedTags.length < 1) {
    url = `${discourseBaseURL()}c/content/community-blog/125.json`;
  } else {
    url = `${discourseBaseURL()}tags/c/content/community-blog/${formattedTags}.json`;
  }

  try {
    let page = 0;

    while (true) {
      const pageUrl = page === 0 ? url : `${url}`;
      const response = await fetch(pageUrl);
      const data: DiscourseResponse = await response.json();

      allData.topic_list.topics = allData.topic_list.topics.concat(data.topic_list.topics);
      allData.users = allData.users.concat(data.users);

      if (data.topic_list.topics.length < 30 || formattedTags === 'identity-security-cloud') {
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

  if (tags && tags.length > 0) {
    switch (tags.length) {
      case 1:
        url = `${discourseBaseURL()}/tags/c/content/video-library/127/${tags[0]}.json`;
        break;
      case 2:
        url = `${discourseBaseURL()}/filter.json?q=category%3Avideo-library%20tag%3A${tags[0]}%2B${tags[1]}`;
        break;
      case 3:
        url = `${discourseBaseURL()}/filter.json?q=category%3Avideo-library%20tag%3A${tags[0]}%2B${tags[1]}%2B${tags[2]}`;
        break;
      default:
        url = `${discourseBaseURL()}c/content/video-library/127.json`;
    }
  } else {
    url = `${discourseBaseURL()}c/content/video-library/l/latest.json`;
  }

  try {
    let page = 0;
    while (true) {
      const pageUrl = page === 0 ? url : `${url}${tags && tags.length > 1 ? '&' : '?'}page=${page}`;
      const response = await fetch(pageUrl);
      const data: VideoPostResponse = await response.json();

      allData.topic_list.topics = [...allData.topic_list.topics, ...data.topic_list.topics];
      if (Array.isArray(data.users)) {
        allData.users = [...allData.users, ...data.users];
      }

      if (data.topic_list.topics.length < 30) {
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

export async function getMarketplacePosts(tags?: string, category?: string): Promise<any> {
  let filterCategory = 'colab';
  if (category && category !== 'colab') {
    filterCategory += `/${category}`;
  }

  const url = discourseBaseURL() + `c/${filterCategory}/l/latest.json` + (tags ? `?tags=${tags}` : '');

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
