import React from "react";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
export default function HomepageBasics() {
  return (
        <div className={styles.gettingStartedText}>
          <img className={styles.gettingStartedCardIcon} src="/homepage/person-head.png"></img>
          <div className={styles.gettingStartedOne}>Start With the Basics</div>
          <div className={styles.gettingStartedThree}>If you still aren't sure where to get started, try one of the <span className={styles.bold}>Getting Started Guides</span> below, or see what our platform has to offer.</div>
          <Link to="/docs/idn_docs/intro">
          <div className={styles.button}>Explore our platform</div>
          </Link>
        </div>
  );
}
