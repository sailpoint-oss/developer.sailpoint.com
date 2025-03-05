import React, { useEffect } from 'react';
import Video from '../../Video';
import styles from './styles.module.css';
import Layout from '@theme/Layout';
import DiscourseEmbed from '../VideoComments';

// Define the props interface
interface VideoCardDetailProps {
  route: {
    customProps: {
      uuid: string;
      title: string;
      body?: string;
      topicid: number;
    };
  };
}

const VideoCardDetail: React.FC<VideoCardDetailProps> = ({ route }) => {
  const base = 'https://play.vidyard.com/';

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://developer.identitysoon.com') {
        // The data that was sent from the iframe
        // console.log(event.data);
        // setIframeStyle();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div className={styles.videoPlayer}>
          <Video source={`${base}${route.customProps.uuid}`} container="vidyard" />
          <div>
            <h1 className={styles.videoTitle}>{route.customProps.title}</h1>
          </div>
          <div>
            <p>{route.customProps.body}</p>
          </div>
          <div id="discourseContainer" className={styles.discourseContainer}>
            <DiscourseEmbed
              discourseEmbedUrl={route.customProps.uuid}
              topicId={route.customProps.topicid}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default VideoCardDetail;
