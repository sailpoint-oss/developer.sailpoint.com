export async function getBanner(cmsurl) {

  try {
    const response = await fetch(cmsurl + 'banner');
    return await response.json();
  } catch (error) {
    return [];
  }
}
 
export async function getItem(cmsurl, itemId) {

  try {
    const response = await fetch(cmsurl + itemId);
    return await response.json();
  } catch (error) {
    return "";
  }
}

