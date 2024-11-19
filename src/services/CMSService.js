import { CMSBaseURL } from '../util/util';

export async function getBanner(cmsurl) {

  try {
    const response = await fetch(cmsurl + 'banner');
    return await response.json();
  } catch (error) {
    return [];
  }
}
