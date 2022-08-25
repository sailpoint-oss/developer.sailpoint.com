import React from "react";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
export default function HomepageBasics({link, title, image, description, buttonText}) {
  return (
        <div className={styles.gettingStartedText}>
          <img className={styles.gettingStartedCardIcon} src={image}></img>
          <div className={styles.gettingStartedOne}>{title}</div>
          <div className={styles.gettingStartedThree} dangerouslySetInnerHTML={{ __html: description }} ></div>
          <Link to={link}>
          <div className={styles.button}>{buttonText}</div>
          </Link>
        </div>
  );
}
