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

    setFilteredProduct({tags: tempFilter});
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
                  {/* <div className={styles.gettingStartedTwo}>
                  What is the CoLab?
                </div> */}
                  <div className={styles.gettingStartedThree}>
                    <span className={styles.bold}>
                      Our video library is a collection of educational videos
                      from our Developer Relations team, live streams,
                      conferences, and other community members.
                    </span>{' '}
                    <br />
                    <br />
                    <a href="https://developer.sailpoint.com/discuss/new-message?groupname=developer_relations&title=Proposal%20for%20Developer%20Community%20Video&body=Write%20your%20request%20here.">
                      Contribute to our library &#8594;
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.carousel}>
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/N-JG8xjpKaI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>

          <div>
            <div>
              <VideoSidebar
                selectedCategory={filteredProduct}
                filterCallback={handleClick}
              />
            </div>
          </div>
          <div className={styles.videosCardContainer}>
            <VideoCards filterCallback={filteredProduct} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
