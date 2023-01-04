import React, { useEffect, useRef } from "react";
import mux from "mux-embed";
import MuxPlayer from "@mux/mux-player-react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import WidgetBot from "@widgetbot/react-embed";

export default function Room({ videoSource }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const initTime = mux.utils.now();

      console.log(videoSource);

      mux.monitor(videoRef.current, {
        debug: false,
        data: {
          env_key: videoSource.muxEnvironmentKey, // required
          // Metadata fields
          player_name: "Main Player", // any arbitrary string you want to use to identify this player
          player_init_time: initTime,
          // ...
        },
      });
    }
  }, [videoRef]);

  return (
    <div className={styles.stageContainer}>
      <div className={styles.stageContentVideo}>
        <MuxPlayer
          streamType="live"
          playbackId={videoSource.muxPlaybackId}
          className="h-full !rounded"
          autoPlay
        />
      </div>
      <WidgetBot
        className={styles.stageContentChat}
        server="1039765757011165194"
        channel="1047378402556002384"
      ></WidgetBot>
    </div>
  );
}
