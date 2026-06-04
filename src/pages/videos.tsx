import {useState} from 'react';
import type {FC} from 'react';
import Layout from '@theme/Layout';
import VideoCards from '../components/video-library/VideoCards';
import VideoSidebar from '../components/video-library/VideoSidebar';
import styles from './videos.module.css';

// Define the type for the filter state
interface FilterState {
  tags: string[];
}

// Define the type for the callback function
interface FilterData {
  tag: string[] | string | null;
}

const VideoLibrary: FC = () => {
  const [filteredProduct, setFilteredProduct] = useState<FilterState>({ tags: [] });

  const handleClick = (data: FilterData) => {
    setFilteredProduct({
      tags: Array.isArray(data.tag) ? data.tag : data.tag ? [data.tag] : [],
    });
  };

  return (
    <Layout title="Videos" description="Watch SailPoint developer videos, livestreams, conference sessions, and community walkthroughs.">
      <main>
        <div>
          <div className={styles.titleContainer}></div>
          <div>
            <div className={styles.mainCard}>
              <div className={styles.contentContainer}>
                <div className={styles.gettingStartedText}>
                  <div className={styles.gettingStartedOne}>Videos</div>
                  <div className={styles.gettingStartedThree}>
                    <span>
                      Watch educational videos from Developer Relations,
                      Developer Days, livestreams, conference sessions, and
                      community contributors. Videos stay hosted here so you can
                      watch without ads and keep discussion connected to the
                      developer forum.
                    </span>
                    <br />
                    <br />
                    <a href="https://developer.sailpoint.com/discuss/new-topic?category=content/video-library&title=Video%20library%20contribution&body=Share%20the%20video%20title,%20source,%20and%20why%20it%20should%20be%20included.">
                      Suggest a video &#8594;
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
