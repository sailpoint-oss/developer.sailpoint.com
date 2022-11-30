import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
import WidgetBot from '@widgetbot/react-embed'
export default function Room() {
  return (
  <div className={styles.stageContainer}>
    <div className={styles.videoContent}>
      <iframe className={styles.video} src="https://www.youtube.com/embed/dVGhO6vSCT8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <div className={styles.discordContent}>
      <WidgetBot className={styles.discord} 
        server="1039765757011165194"
        channel="1047378402556002384"
      ></WidgetBot>
    </div>
  </div>
  );
}
