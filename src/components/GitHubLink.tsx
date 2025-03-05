import React, { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface GitHubPublicFileComponentProps {
  children?: React.ReactNode;
  source: string;
}

const GitHubPublicFileComponent: React.FC<GitHubPublicFileComponentProps> = ({ children, source }) => {
  const [fileContent, setFileContent] = useState<string>('');

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch(source);

        if (response.ok) {
          const content = await response.text();
          setFileContent(content);
        } else {
          console.error('Error fetching GitHub file:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching GitHub file:', error);
      }
    };

    fetchFileContent();
  }, [source]);

  return (
    <a href={fileContent} target="_blank" rel="noopener noreferrer">
      <img src={useBaseUrl('/img/button.svg')} alt="GitHub File Button" />
    </a>
  );
};

export default GitHubPublicFileComponent;
