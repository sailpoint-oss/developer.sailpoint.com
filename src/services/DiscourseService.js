import {discourseBaseURL} from '../util/util';

export async function getTopPosts() {
  try {
    const response = await fetch(
      discourseBaseURL() + 'top.json',
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}
export async function getAmbassadors(expert, limit, offset) {
  try {
    if (expert) {
      const response = await fetch(
        discourseBaseURL() + 'groups/ambassador_expert/members.json?limit=' + limit + '&offset=' + offset,
      );
      return await response.json();
    } else {
      const response = await fetch(
        discourseBaseURL() + 'groups/ambassador/members.json?limit=' + limit + '&offset=' + offset,
      );
      return await response.json();
    }

  } catch (error) {
    return [];
  }
}

export async function getAmbassadorDetails(id) {
  try {
    const response = await fetch(
      discourseBaseURL() + 'user-cards.json?user_ids=' + id.join(','),
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}


export async function checkImage(url) {
  try {
    const response = await fetch(
      url,
    );
    return true
  } catch (error) {
    return false;
  }
}


export async function getBlogPosts(tags) {
  let url = ''
  if (tags) {
    url = discourseBaseURL() + 'search.json?q=category:blog-posts+tags:' + tags
  } else {
    url = discourseBaseURL() + 'search.json?q=category:blog-posts'
  }
  try {
    const response = await fetch(
      url,
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getMarketplacePosts(tags, category) {
  let filterCategory = 'colab'
  if (category && category != 'colab') {
    filterCategory = filterCategory + '/' + category
  }
  console.log(`filter catagory ${filterCategory}`)
  console.log(`tags ${tags}`)
  let url = ''
  if (tags) {
    url = discourseBaseURL() + 'c/' + filterCategory + '/l/latest.json?tags=' + tags
  } else {
    url = discourseBaseURL() + 'c/' + filterCategory + '/l/latest.json'
  }
  try {
    const response = await fetch(
      url,
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getTopic(id) {
  try {
    const response = await fetch(
      discourseBaseURL() + 't/' + id + '.json',
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getMarketplaceTopic(id) {
  try {
    const response = await fetch(
      discourseBaseURL() + 't/' + id + '.json',
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getMarketplaceTopicRaw(id) {
  try {
    const response = await fetch(
      discourseBaseURL() + 'raw/' + id + '.json',
    );
    return await response.text();
  } catch (error) {
    return [];
  }
}

export async function getTags() {
  try {
    const response = await fetch(
      discourseBaseURL() + 'tags.json',
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getCatagories() {
  try {
    const response = await fetch(
      discourseBaseURL() + 'categories.json',
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}