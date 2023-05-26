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

export async function getBlogPosts(tags) {
  let url = ''
  if (tags) {
    url = 'https://developer.sailpoint.com/discuss/search.json?q=category:blog+tags:' + tags
  } else {
    url = 'https://developer.sailpoint.com/discuss/search.json?q=category:blog'
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
      'https://developer.sailpoint.com/discuss/t/' + id + '.json',
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getTags() {
  try {
    const response = await fetch(
      'https://developer.sailpoint.com/discuss/tags.json',
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}