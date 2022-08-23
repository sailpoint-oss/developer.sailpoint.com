import React from "react";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
export default function HomepageCard({link, title, image}) {
  return (
    <Link to={link}>
      <div className={styles.getStartedCard}>
        <img className={styles.gettingStartedCardIcon} src={image}></img>
        <img className={styles.gettingStartedCardArrow} src="/homepage/arrow-right.png"></img>
        <div className={styles.gettingStartedCardText}>{title}</div>
      </div>
    </Link>
  );
}
