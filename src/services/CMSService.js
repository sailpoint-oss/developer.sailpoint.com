export async function getBanner(cmsurl) {

  try {
    const response = await fetch(cmsurl + 'banner');
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getV2024(cmsurl) {

  try {
    const response = await fetch(cmsurl + 'collectionUrls');
    return await response.json();
  } catch (error) {
    return [];
  }
}

