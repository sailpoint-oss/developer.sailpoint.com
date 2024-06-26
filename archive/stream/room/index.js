import React, {useEffect, useRef, useState} from 'react';
import MuxPlayer from '@mux/mux-player-react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import WidgetBot from '@widgetbot/react-embed';

export default function Room({videoSource, userID}) {
  const [test, setTest] = useState();

  useEffect(() => {
    setTest(test);
  }, [videoSource?.topic]);

  console.log(userID);

  const staticVideo = '/img/developer_days_placeholder_video.mov';
  const placeholderVideo = 'placeholdervideo';

  return (
    <div className="flex lg:flex-row flex-col gap-[.3%] h-full p-[.3%]">
      <div className="lg:w-[60%] w-full overflow-hidden rounded-lg">
        <MuxPlayer
          src={
            videoSource?.muxPlaybackId === placeholderVideo ? staticVideo : null
          }
          loop={true}
          autoPlay={true}
          streamType={
            videoSource?.muxPlaybackId === placeholderVideo ? null : 'live'
          }
          playbackId={
            videoSource?.muxPlaybackId === placeholderVideo
              ? ''
              : videoSource?.muxPlaybackId
          }
          envKey={videoSource?.muxEnvironmentKey}
          metadata={{
            player_name: 'SailPoint Developer Community - Developer Days',
            video_id: videoSource?.id,
            video_title: `${videoSource?.id} - ${videoSource?.topic}`,
            viewer_user_id: userID,
            autoPlay: true,
          }}
          className="aspect-video h-full"
        />
      </div>
      <WidgetBot
        className="w-full lg:w-[40%] grow lg:h-auto h-[720px]"
        server="1039765757011165194"
        channel="1039765757556428882"
        shard="https://e-sp.widgetbot.co"
      />
    </div>
  );
}
