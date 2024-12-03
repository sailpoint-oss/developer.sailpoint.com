import React, {useEffect, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {getV2024} from '../services/CMSService';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
export default function GitHubPublicFileComponent({children, source}) {
  const [fileContent, setFileContent] = useState('');
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        //const response = await getV2024(siteConfig.customFields.CMS_APP_API_ENDPOINT);
        const response = await getV2024('https://lyna7x4y34.execute-api.us-east-1.amazonaws.com/Prod/');
        console.log('response', response);
        if (response.id) {
          const content = JSON.parse(response.Item)
          console.log(content)
          setFileContent(content.v2024);
        } else {
          console.error('Error fetching GitHub file:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching GitHub file:', error);
      }
    };

    fetchFileContent();
  }, []);

  return (
    <a href={fileContent} target="_blank">
      <img src={useBaseUrl('/img/button.svg')}></img>
    </a>
  );
}
