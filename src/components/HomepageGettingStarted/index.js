import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
export default function HomepageGettingStarted() {
  return (
    <div>
      <div className={styles.mainCard}>
        <div className={styles.gettingStartedText}>
          <div className={styles.gettingStartedOne}>SailPoint Developer Community</div>
          <div className={styles.gettingStartedTwo}>Don't know where to get started?</div>
          <div className={styles.gettingStartedThree}>Jump into our <span className={styles.bold}>Get Started Guides</span> for more information.</div>
        </div>
        <div className={styles.gridContainer}>
            <Link to="/docs/idn_docs/intro">
              <div className={styles.getStartedCard}>
                <div className={styles.gettingStartedCardText}>Get Started with IdentityNow</div>
                <img className={styles.gettingStartedCardIcon} src="/homepage/cloud.png"></img>
                <img className={styles.gettingStartedCardArrow} src="/homepage/arrow-right.png"></img>
              </div>
            </Link>
            <Link to="/docs/idn_docs/intro">
              <div className={styles.getStartedCard}>
                <div className={styles.gettingStartedCardText}>Get Started with IdentityIQ</div>
                <img className={styles.gettingStartedCardIcon} src="/homepage/cloud.png"></img>
                <img className={styles.gettingStartedCardArrow} src="/homepage/arrow-right.png"></img>
              </div>
            </Link>
          </div>
      </div>
    </div>
  );
}
