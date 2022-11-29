import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
import WidgetBot from '@widgetbot/react-embed'
export default function Room() {
  return (
  <div className={styles.stageContainer}>
    <div className={styles.stageContent}>
      <iframe className={styles.video} src="https://www.youtube.com/embed/dVGhO6vSCT8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <div className={styles.stageContent}>
      <WidgetBot className={styles.video} 
          server="950875158011338752"
          channel="950875158011338755"
          shard="https://emerald.widgetbot.io"
      ></WidgetBot>
    </div>
  </div>
  );
}
