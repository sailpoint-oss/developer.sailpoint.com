import { discourseBaseURL, removeRecordsWithCategoryId } from '../util/util';

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
    
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getAmbassadorDetails(id: number[]): Promise<any[]> {
  try {
    const response = await fetch(discourseBaseURL() + 'user-cards.json?user_ids=' + id.join(','));
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getAmbassadorPoints(): Promise<any[]> {
  try {
    const response = await fetch(discourseBaseURL() + 'leaderboard/14.json');
    return await response.json();
  } catch (error) {
    return [];
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
