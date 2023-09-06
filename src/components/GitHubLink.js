import React, { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
export default function GitHubPublicFileComponent({children, source}) {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch(
          source
        );

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
  }, []);

  return (
    
    <a href={fileContent} target="_blank">
        <img src={useBaseUrl('/img/button.svg')}></img>
    </a>
  );
};
