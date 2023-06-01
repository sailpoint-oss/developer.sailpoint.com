import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import {addDarkToFileName} from '../../../util/util';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactMarkdown from 'react-markdown'
export default function MarketplaceCardDetail({
  details
}) {


  const getDivText = (data, id) => {
      const requirementPosition = data.indexOf('id="' + id + '"')
      const requirementEndPosition = data.indexOf('</div>', requirementPosition)
      if (requirementPosition > 0 && requirementEndPosition > 0) {
        return data.substring(requirementPosition + 6 + id.length, requirementEndPosition)
      } else {
        return "No requirements found for this marketplace item"
      }
      
  }


  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailHeader}>
        <div className={styles.detailTitle}>{details.title}</div>
        <img className={styles.detailImage} src={useBaseUrl(details.image)}></img>
      </div>
      
      <Tabs className={styles.detailTabs}>
        <TabList>
          <Tab>Details</Tab>
          <Tab>Requirements</Tab>
          <Tab>Support</Tab>
        </TabList>

        <TabPanel>
          <ReactMarkdown className={styles.detailTabContent}>{getDivText(details.rawData, "details")}</ReactMarkdown>
        </TabPanel>
        <TabPanel>
        <ReactMarkdown className={styles.detailTabContent}>{getDivText(details.rawData, "requirements")}</ReactMarkdown>
        </TabPanel>
        <TabPanel>
        <ReactMarkdown className={styles.detailTabContent}>{getDivText(details.rawData, "support")}</ReactMarkdown>
        </TabPanel>
      </Tabs>

    </div>
  );
}
