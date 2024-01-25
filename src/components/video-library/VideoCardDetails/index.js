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
      if (event.origin !== 'https://developer.identitysoon.com') {
        // Replace with the actual domain of the parent
        console.log('Message not from parent! Ignoring.');
        return; // Only accept messages from the specified origin
      }

      console.log('Received message from parent: ', event.data);
      const data = event.data;

      if (data.action === 'changeStyle') {
        Object.keys(data.styles).forEach((key) => {
          document.body.style[key] = data.styles[key];
        });
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
            <h1>{props.route.customProps.title}</h1>
          </div>
          <div>
            <p>{props.route.customProps.body}</p>
          </div>
          <div id="discourseContainer" className={styles.discourseContainer}>
            <DiscourseEmbed></DiscourseEmbed>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default VideoCardDetail;
