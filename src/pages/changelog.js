import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './changelog.module.css';
import ChangeLogBanner from '../components/changelog/ChangeLogBanner';
import ChangeLogSidebar from '../components/changelog/ChangeLogSidebar';
import ChangeLogRecords from '../components/changelog/ChangeLogRecords';

export default function Blog() {
  const [filteredRecords, setFilteredRecords] = React.useState([]);

  const {siteConfig} = useDocusaurusContext();

  const handleClick = (data) => {
    var tempFilter = filteredRecords.slice();

    const index = tempFilter.indexOf(data);
    if (index !== -1) {
      tempFilter.splice(index, 1);
    } else {
      if (data.includes('startDate')) {
        tempFilter.forEach((element) => {
          if (element.includes('startDate')) {
            tempFilter.pop(tempFilter.indexOf('startDate'));
          }
        });
      }

      if (data.includes('endDate')) {
        tempFilter.forEach((element) => {
          if (element.includes('endDate')) {
            tempFilter.pop(tempFilter.indexOf('endDate'));
          }
        });
      }
      tempFilter.push(data);
    }

    // console.log('temFilter: ' + tempFilter);
    setFilteredRecords(tempFilter);
  };
  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main className={styles.changeLog}>
        <ChangeLogBanner />
        <div className={styles.changelogContainer}>
          <div>
            <ChangeLogSidebar filterCallback={handleClick} />
          </div>
          <div className={styles.changeLogRecords}>
            <ChangeLogRecords filterCallback={filteredRecords} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
