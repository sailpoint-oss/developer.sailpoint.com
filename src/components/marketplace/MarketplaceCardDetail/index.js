import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import { addDarkToFileName } from '../../../util/util';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactMarkdown from 'react-markdown';
import BounceLoader from 'react-spinners/BounceLoader';
export default function MarketplaceCardDetail({ details, rawPost }) {
  const getDivText = (data, id) => {
    const requirementPosition = data.indexOf('id="' + id + '"');
    const requirementEndPosition = data.indexOf('</div>', requirementPosition);
    if (requirementPosition > 0 && requirementEndPosition > 0) {
      const validContent = data.substring(
        requirementPosition + 6 + id.length,
        requirementEndPosition,
      );
      const incorrectURLPattern = /upload:\/\/([^"]+)/g;
      const correctURLPattern =
        'https://developer.sailpoint.com/discuss/uploads/short-url/$1';
      return validContent.replace(incorrectURLPattern, correctURLPattern);
    } else {
      return 'No requirements found for this marketplace item';
    }
  };

  const goToLink = (link) => {
    window.open(link, '_blank');
  };

  if (details) {
    return (
      <div className={styles.detailContainer}>
        <div className={styles.detailHeader}>
          <div className={styles.detailTitle}>{details.title}</div>
          <img
            className={styles.detailImage}
            src={useBaseUrl(details.image)}></img>

        </div>

        <Tabs className={styles.detailTabs}>
          <button
            className={styles.modalButton}
            onClick={async () => {
              goToLink(details.link);
            }}>
            <div className={styles.modalButtonText}>
              <img
                className={styles.buttonImage}
                src={useBaseUrl('/icons/discourse.svg')}></img>
              See More
            </div>
          </button>
          <TabList>
            <Tab>Details</Tab>
            <Tab>Requirements</Tab>
            <Tab>Support</Tab>
          </TabList>

          <TabPanel>
            <ReactMarkdown className={styles.detailTabContent}>
              {getDivText(rawPost, 'details')}
            </ReactMarkdown>
          </TabPanel>
          <TabPanel>
            <ReactMarkdown className={styles.detailTabContent}>
              {getDivText(rawPost, 'requirements')}
            </ReactMarkdown>
          </TabPanel>
          <TabPanel>
            <ReactMarkdown className={styles.detailTabContent}>
              {getDivText(rawPost, 'support')}
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
}
