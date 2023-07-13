export async function getTopPosts() {
  try {
    const response = await fetch(
      'https://developer.sailpoint.com/discuss/top.json',
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}
export async function getAmbassadors(expert) {
  try {
    if (expert) {
      const response = await fetch(
        'https://developer.sailpoint.com/discuss/groups/ambassador_expert/members.json',
      );
      return await response.json();
    } else {
      const response = await fetch(
        'https://developer.sailpoint.com/discuss/groups/ambassador/members.json',
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
      'https://developer.sailpoint.com/discuss/user-cards.json?user_ids=' + id.join(','),
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
    url = 'https://developer.sailpoint.com/discuss/search.json?q=category:blog-posts+tags:' + tags
  } else {
    url = 'https://developer.sailpoint.com/discuss/search.json?q=category:blog-posts'
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
  let filterCategory = 'marketplace'
  if (category) {
    filterCategory = category
  }
  let url = ''
  if (tags) {
    url = 'https://developer.identitysoon.com/discuss/search.json?q=category:' + filterCategory + '+tags:' + tags
  } else {
    url = 'https://developer.identitysoon.com/discuss/search.json?q=category:' + filterCategory
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
      'https://developer.identitysoon.com/discuss/t/' + id + '.json',
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getMarketplaceTopic(id) {
  try {
    const response = await fetch(
      'https://developer.identitysoon.com/discuss/t/' + id + '.json',
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getMarketplaceTopicRaw(id) {
  try {
    const response = await fetch(
      'https://developer.identitysoon.com/discuss/raw/' + id + '.json',
    );
    return await response.text();
  } catch (error) {
    return [];
  }
}

export async function getTags() {
  try {
    const response = await fetch(
      'https://developer.identitysoon.com/discuss/tags.json',
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getCatagories() {
  try {
    const response = await fetch(
      'https://developer.identitysoon.com/discuss/categories.json',
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}