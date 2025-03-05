import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactMarkdown from 'react-markdown';
import BounceLoader from 'react-spinners/BounceLoader';
import { discourseBaseURL } from '../../../util/util';

// Define the props interface
interface MarketplaceCardDetailProps {
  details?: {
    title: string;
    image: string;
    link: string;
  };
  rawPost: string;
}

const MarketplaceCardDetail: React.FC<MarketplaceCardDetailProps> = ({ details, rawPost }) => {
  
  const getCommentText = (data: string, id: string): string => {
    const startTag = `[//]: <> (${id} Start)`;
    const endTag = `[//]: <> (${id} End)`;
    const startPosition = data.indexOf(startTag);
    const endPosition = data.indexOf(endTag);
    
    if (startPosition > 0 && endPosition > 0) {
      const validContent = data.substring(startPosition + startTag.length, endPosition);
      return validContent.replace(/upload:\/\/([^"]+)/g, discourseBaseURL() + 'uploads/short-url/$1');
    }
    return 'No requirements found for this marketplace item';
  };

  const goToLink = (link: string) => {
    window.open(link, '_blank');
  };

  if (details) {
    return (
      <div className={styles.detailContainer}>
        <div className={styles.detailHeader}>
          <div className={styles.detailTitle}>{details.title}</div>
          <img className={styles.detailImage} src={useBaseUrl(details.image)} alt={details.title} />
        </div>

        <Tabs className={styles.detailTabs}>
          <button
            className={styles.modalButton}
            onClick={() => goToLink(details.link)}
          >
            <div className={styles.modalButtonText}>
              <img className={styles.buttonImage} src={useBaseUrl('/icons/discourse.svg')} alt="Go to Download" />
              Go to Download
            </div>
          </button>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Requirements</Tab>
            <Tab>Support</Tab>
          </TabList>

          <TabPanel>
            <ReactMarkdown className={styles.detailTabContent}>
              {getCommentText(rawPost, 'Overview')}
            </ReactMarkdown>
          </TabPanel>
          <TabPanel>
            <ReactMarkdown className={styles.detailTabContent}>
              {getCommentText(rawPost, 'Requirements')}
            </ReactMarkdown>
          </TabPanel>
          <TabPanel>
            <ReactMarkdown className={styles.detailTabContent}>
              The Developer Community CoLab has three different support models,
              depending on the integration. Please see the full integration page
              using the `Go To Download` button above.
            </ReactMarkdown>
          </TabPanel>
        </Tabs>
      </div>
    );
  } else {
    return (
      <BounceLoader
        className={styles.spinnerCenter}
        color={'#0033a1'}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
};

export default MarketplaceCardDetail;
