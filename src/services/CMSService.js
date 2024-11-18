import {CMSBaseURL} from '../util/util';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
const {siteConfig} = useDocusaurusContext();

export async function getBanner() {
  try {
    const response = await fetch(siteConfig.customFields.CMS_APP_API_ENDPOINT + 'banner');
    return await response.json();
  } catch (error) {
    return [];
  }
}
