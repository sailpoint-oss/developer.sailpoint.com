import React, {useEffect, useRef, useState} from 'react';
import MuxPlayer from '@mux/mux-player-react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import WidgetBot from '@widgetbot/react-embed';

export default function Room({videoSource}) {
  const [test, setTest] = useState();

  useEffect(() => {
    setTest(test);
  }, [videoSource?.topic]);

  const placeholdervideo = 'placeholdervideo';

  return (
    <div className={`${styles.stageContainer}`}>
      <div className={styles.stageContentVideo}>
        <MuxPlayer
          src={
            videoSource?.muxPlaybackId === placeholdervideo
              ? '/img/blurred_intro.mov'
              : ''
          }
          loop={true}
          autoPlay={true}
          streamType={
            videoSource?.muxPlaybackId === placeholdervideo ? null : 'live'
          }
          playbackId={
            videoSource?.muxPlaybackId === placeholdervideo
              ? ''
              : videoSource?.muxPlaybackId
          }
          envKey={videoSource?.muxEnvironmentKey}
          metadata={{
            player_name: 'SailPoint Developer Community - Developer Days',
            video_id: videoSource?.id,
            video_title: `${videoSource?.speaker} - ${videoSource?.topic}`,
            viewer_user_id: 'Test User ID',
            autoPlay: true,
          }}
          className="h-full !rounded"
        />
      </div>
      <WidgetBot
        className={styles.stageContentChat}
        server="1039765757011165194"
        channel="1039765757556428882"
      />
    </div>
  );
}
