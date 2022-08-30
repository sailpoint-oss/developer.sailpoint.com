import React from "react";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
export default function TeamCard({link, title, name, expertise, image}) {

  return (
    <Link to={link}>
      <div className={styles.card}>
      <img className={styles.cardFace} src={image}></img>
        <img className={styles.cardArrow} src="/homepage/arrow-right.png"></img>
        <div className={styles.cardText}>{name}</div>
        <div className={styles.titleText}>{title}</div>
        <div className={styles.expertiseText}>{expertise}</div>
      </div>
    </Link>
  );
}
