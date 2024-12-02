import { CMSBaseURL } from '../util/util';

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
    const response = await fetch(cmsurl + 'v2024CollectionUrl');
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getV3(cmsurl) {

  try {
    const response = await fetch(cmsurl + 'v3CollectionUrl');
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getBeta(cmsurl) {

  try {
    const response = await fetch(cmsurl + 'betaCollectionUrl');
    return await response.json();
  } catch (error) {
    return [];
  }
}