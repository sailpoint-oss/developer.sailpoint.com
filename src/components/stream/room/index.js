import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
import WidgetBot from '@widgetbot/react-embed'
export default function Room({videoSource}) {
  return (
  <div className={styles.stageContainer}>
      <iframe className={styles.stageContentVideo} src={videoSource} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <WidgetBot className={styles.stageContentChat} 
        server="1039765757011165194"
        channel="1047378402556002384"
      ></WidgetBot>
  </div>
  );
}
