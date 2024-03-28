import React, {useEffect} from 'react';
import Video from '../../Video.js';
import styles from './styles.module.css';
import Layout from '@theme/Layout';
import DiscourseEmbed from '../VideoComments/index.js';

const VideoCardDetail = (props) => {
  const base = 'https://play.vidyard.com/';

  useEffect(() => {
    // This code would be part of your iframe's JavaScript
    window.addEventListener('message', (event) => {
      console.log(event);
      if (event.origin === 'https://developer.identitysoon.com') {
        // The data that was sent from the iframe
        console.log(event.data);
        // setIframeStyle();
      }
    });
  }, []);

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div className={styles.videoPlayer}>
          <Video
            source={base + props.route.customProps.uuid}
            container="vidyard"></Video>
          <div>
            <h1 className={styles.videoTitle}>
              {props.route.customProps.title}
            </h1>
          </div>
          <div>
            <p>
              {props.route.customProps.body}
            </p>
          </div>
          <div id="discourseContainer" className={styles.discourseContainer}>
            <DiscourseEmbed
              discourseEmbedUrl={props.route.customProps.uuid}
              topicId={props.route.customProps.topicid}></DiscourseEmbed>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default VideoCardDetail;
