import React, {useEffect, useRef, useState} from 'react';
import MuxPlayer from '@mux/mux-player-react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import WidgetBot from '@widgetbot/react-embed';

export default function Room({videoSource}) {
  console.log(videoSource);
  const [test, setTest] = useState();

  useEffect(() => {
    setTest(test);
  }, [videoSource?.topic]);

  return (
    <div className={styles.stageContainer}>
      <div className={styles.stageContentVideo}>
        <MuxPlayer
          streamType="live"
          playbackId={videoSource?.muxPlaybackId}
          envKey={videoSource?.muxEnvironmentKey}
          metadata={{
            player_name: 'SailPoint Developer Community - Developer Days',
            video_id: videoSource?.id,
            video_title: `${videoSource?.speaker} - ${videoSource?.topic}`,
            viewer_user_id: 'Test User ID',
            autoPlay: true,
          }}
          className="h-full !rounded"
          autoPlay
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
