import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './homepage.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Categories from '../components/homepage/Categories/index.js';
import TopicCards from '../components/homepage/Topics/TopicCards/index.js';
import DeveloperDays from '../components/homepage/DeveloperDays/index.js';
import Ambassador from '../components/homepage/Ambassador/index.js';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {max: 4000, min: 0},
    items: 1,
    partialVisibilityGutter: 30,
  },
};

export default function HomePage() {
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

    setFilteredRecords(tempFilter);
  };

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div className={styles.mainContainer}>
          <Carousel
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            partialVisible={false}
            responsive={responsive}>
            <div>
              <DeveloperDays />
            </div>
            <div>
              <Ambassador />
            </div>
          </Carousel>
          <div className={styles.headerBackground}>
            <div className={styles.headerContainer}>
              <h2 className={styles.header}>
                Sail into our community forum and discover what's making waves.
              </h2>
            </div>
          </div>
          <div className={styles.community}>
            <div className={styles.catContainer}>
              <h5 className={styles.filterCatTitle}>
                Select categories to filter by and see what the community is
                discussing
              </h5>
              <Categories filterCallback={handleClick} />
            </div>

            <div className={styles.topicContainer}>
              <TopicCards filterCallback={filteredRecords} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
