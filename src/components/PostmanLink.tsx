import React, { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { getItem } from '../services/CMSService';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface CMSLinkComponentProps {
  children?: React.ReactNode;
  source: string;
}

const CMSLinkComponent: React.FC<CMSLinkComponentProps> = ({ children, source }) => {
  const [fileContent, setFileContent] = useState<string>('');
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await getItem(siteConfig.customFields.CMS_APP_API_ENDPOINT, source);
        if (response.id) {
          const content = response.Item;
          setFileContent(content);
        } else {
          console.error('Error fetching GitHub file:', response);
        }
      } catch (error) {
        console.error('Error fetching GitHub file:', error);
      }
    };

    fetchFileContent();
  }, [source, siteConfig.customFields.CMS_APP_API_ENDPOINT]);

  return (
    <a href={fileContent} target="_blank" rel="noopener noreferrer">
      <img src={useBaseUrl('/img/button.svg')} alt="Button" />
    </a>
  );
};

export default CMSLinkComponent;
