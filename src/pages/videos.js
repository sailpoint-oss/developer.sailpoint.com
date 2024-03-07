import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import VideoCards from '../components/video-library/VideoCards';
import VideoSidebar from '../components/video-library/VideoSidebar';
import DiscourseEmbed from '../components/video-library/VideoComments';
import styles from './videos.module.css';

export default function VideoLibrary() {
  const [filteredProduct, setFilteredProduct] = React.useState({
    tags: [],
  });
  const {siteConfig} = useDocusaurusContext();

  const handleClick = (data) => {
    var tempFilter = filteredProduct.tags.slice();

    if (data.tag) {
      const index = tempFilter.indexOf(data.tag);
      if (index !== -1) {
        tempFilter.splice(index, 1);
      } else {
        tempFilter.push(data.tag);
      }
    }
    console.log('tempFilter', tempFilter);
    setFilteredProduct({tags: tempFilter});
  };

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div className={styles.videosContainer}>
          <div className={styles.videosSidbarContainer}>
            <VideoSidebar
              selectedCategory={filteredProduct}
              filterCallback={handleClick}
            />
          </div>
          <div className={styles.videosCardContainer}>
            <VideoCards filterCallback={filteredProduct} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
