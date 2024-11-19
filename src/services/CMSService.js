import {CMSBaseURL} from '../util/util';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export async function getBanner() {
  const {siteConfig} = useDocusaurusContext();
  console.log(siteConfig.themeConfig.customFields.CMS_APP_API_ENDPOINT);
  console.log(siteConfig.customFields.CMS_APP_API_ENDPOINT);

  try {
    const response = await fetch(siteConfig.customFields.CMS_APP_API_ENDPOINT + 'banner');
    return await response.json();
  } catch (error) {
    return [];
  }
}
