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
    setFilteredProduct({tags: data.tag});
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
                  <div className={styles.gettingStartedOne}>Video Library</div>
                  <div className={styles.gettingStartedThree}>
                    <span>
                      Our video library is a collection of educational videos
                      from our Developer Relations team, live streams,
                      conferences, and other community members.
                    </span>{' '}
                    <br />
                    <br />
                    <a href="https://platform.sailpoint.com/new-message?groupname=developer_relations&title=Proposal%20for%20Developer%20Community%20Video&body=Write%20your%20request%20here.">
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
}
