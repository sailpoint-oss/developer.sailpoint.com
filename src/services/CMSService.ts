export async function getBanner(cmsurl: string): Promise<any[]> {
  try {
    const response = await fetch(`${cmsurl}banner`);
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getItem(cmsurl: string, itemId: string): Promise<any> {
  try {
    const response = await fetch(`${cmsurl}${itemId}`);
    return await response.json();
  } catch (error) {
    return "";
  }
}
