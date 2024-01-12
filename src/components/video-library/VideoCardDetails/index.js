import React from 'react';
import Video from '../../Video.js';
import styles from './styles.module.css';
import Layout from '@theme/Layout';
import DiscourseEmbed from '../VideoComments/index.js';

const VideoCardDetail = (props) => {
  const base = 'https://play.vidyard.com/';

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div className={styles.videoPlayer}>
          <Video
            source={base + props.route.customProps.uuid}
            container="vidyard"></Video>
          <div>
            <h1>{props.route.customProps.title}</h1>
          </div>
          <div>
            <p>{props.route.customProps.body}</p>
          </div>
          <div id='discourseContainer' className={styles.discourseContainer}>
            <DiscourseEmbed></DiscourseEmbed>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default VideoCardDetail;
