import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import VideoCards from '../components/video-library/VideoCards';
import VideoSidebar from '../components/video-library/VideoSidebar';
import DiscourseEmbed from '../components/video-library/VideoComments';
import styles from './exchange.module.css';

export default function VideoLibrary() {
  const [filteredProduct, setFilteredProduct] = React.useState({
    category: 'colab',
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

    if (data.category) {
      setFilteredProduct({category: data.category, tags: tempFilter});
    } else {
      setFilteredProduct({
        category: filteredProduct.category,
        tags: tempFilter,
      });
    }
  };

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div className={styles.blogContainer}>
          <div className={styles.blogSidbarContainer}>
            <VideoSidebar
              selectedCategory={filteredProduct.category}
              filterCallback={handleClick}
            />
          </div>
          <div className={styles.blogCardContainer}>
            <VideoCards filterCallback={filteredProduct} />
          </div>
          <div id="discourseContainer" className={styles.discourseContainer}>
            <DiscourseEmbed discourseEmbedUrl={"test"}></DiscourseEmbed>
          </div>
        </div>
      </main>
    </Layout>
  );
}
