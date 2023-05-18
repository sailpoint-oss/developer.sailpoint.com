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

export async function getBlogPosts() {
  try {
    const response = await fetch(
      'https://developer.sailpoint.com/discuss/search.json?q=category:blog',
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}
