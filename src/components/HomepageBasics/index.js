import React from "react";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
export default function HomepageBasics({link, title, image, description, buttonText}) {

  let linkHtml = <div></div>
  if (buttonText) {
     linkHtml =  <Link to={link}>
      <div className={styles.button}>

          {buttonText}

      </div></Link>
  }
  return (
        <div className={styles.gettingStartedText}>
          <img className={styles.gettingStartedCardIcon} src={useBaseUrl(image)}></img>
          <div className={styles.gettingStartedOne}>{title}</div>
          <div className={styles.gettingStartedThree} dangerouslySetInnerHTML={{ __html: description }} ></div>
          {linkHtml}
        </div>
  );
}
