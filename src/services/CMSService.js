import {CMSBaseURL} from '../util/util';

export async function getBanner() {
  try {
    const response = await fetch(CMSBaseURL() + 'banner');
    return await response.json();
  } catch (error) {
    return [];
  }
}
