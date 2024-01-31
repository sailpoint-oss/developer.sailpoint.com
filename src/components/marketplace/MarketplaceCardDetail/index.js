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
import {discourseBaseURL, developerWebsiteDomain} from '../../../util/util';
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
      discourseBaseURL() + 'uploads/short-url/$1';
      return validContent.replace(incorrectURLPattern, correctURLPattern);
    } else {
      return 'No requirements found for this marketplace item';
    }
  };

  const getCommentText = (data, id) => {
    const requirementPosition = data.indexOf('[//]: <> (' + id + ' Start)');
    const requirementEndPosition = data.indexOf('[//]: <> (' + id + ' End)');
    if (requirementPosition > 0 && requirementEndPosition > 0) {
      const validContent = data.substring(
        requirementPosition + 17 + id.length,
        requirementEndPosition,
      );
      const incorrectURLPattern = /upload:\/\/([^"]+)/g;
      const correctURLPattern =
      discourseBaseURL() + 'uploads/short-url/$1';
      return validContent.replace(incorrectURLPattern, correctURLPattern);
    } else {
      return 'No requirements found for this marketplace item';
    }
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
          <a
            className={styles.modalButton}
            href={details.link}
            rel="noreferrer"
            target="_blank"
              >
            <div className={styles.modalButtonText}>
              <img
                className={styles.buttonImage}
                src={useBaseUrl('/icons/discourse.svg')}></img>
              Go to Download
            </div>
          </a>
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
              The Developer Community CoLab has three different support models, depending on the integration. Please see the full integration page using the ``` Go To Download ``` button above.
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
