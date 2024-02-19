import {CMSBaseURL} from '../util/util.ts';

export async function getBanner() {
  try {
    const response = await fetch(
        CMSBaseURL() + 'banner',
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}