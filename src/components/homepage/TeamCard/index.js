import React from "react";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
export default function TeamCard({link, title, name, expertise, image}) {

  return (
    <Link to={link}>
      <div className={styles.card}>
      <div className={styles.cardFaceContainer}>
        <img className={styles.cardFace} src={useBaseUrl(image)}></img>
      </div>
      <img className={styles.cardArrow} src={useBaseUrl("/homepage/arrow-right.png")}></img>
      <div className={styles.cardText}>{name}</div>
      <div className={styles.titleText}>{title}</div>
      <div className={styles.expertiseText}>{expertise}</div>
      </div>
    </Link>
  );
}
