import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import VideoCards from '../components/video-library/VideoCards';
import VideoSidebar from '../components/video-library/VideoSidebar';
import styles from './videos.module.css';

// Define the type for the filter state
interface FilterState {
  tags: string[];
}

// Define the type for the callback function
interface FilterData {
  tag: string[];
}

const VideoLibrary: React.FC = () => {
  const [filteredProduct, setFilteredProduct] = useState<FilterState>({ tags: [] });
  const { siteConfig } = useDocusaurusContext();

  const handleClick = (data: FilterData) => {
    setFilteredProduct({ tags: data.tag });
  };

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div>
          <div className={styles.titleContainer}></div>
          <div>
            <div className={styles.mainCard}>
              <div className={styles.contentContainer}>
                <div className={styles.gettingStartedText}>
                  <div className={styles.gettingStartedOne}>Video library</div>
                  <div className={styles.gettingStartedThree}>
                    <span>
                      Our video library is a collection of educational videos
                      from our Developer Relations team, live streams,
                      conferences, and other community members.
                    </span>
                    <br />
                    <br />
                    <a href="https://developer.sailpoint.com/discuss/new-message?groupname=developer_relations&title=Proposal%20for%20Developer%20Community%20Video&body=Write%20your%20request%20here.">
                      Contribute to our library &#8594;
                    </a>
                  </div>
                </div>
                <div className={styles.featuredGettingStartedText}>
                  <div className={styles.gettingStartedOne}>Featured</div>
                </div>
              </div>

              <div className={styles.featuredVideo} title="Featured Video">
                <VideoCards
                  filterCallback={filteredProduct}
                  limit={1}
                  featured={true}
                />
              </div>
            </div>

            <div className={styles.videosCardContainer}>
              <div className={styles.videoSideBar}>
                <VideoSidebar
                  selectedCategory={filteredProduct}
                  filterCallback={handleClick}
                />
              </div>
              <VideoCards filterCallback={filteredProduct} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default VideoLibrary;
