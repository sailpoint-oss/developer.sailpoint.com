import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
import Carousel from 'react-bootstrap/Carousel';
export default function HomepageGettingStarted() {
  return (
    <div>
      <div className={styles.mainCard}>
        <div>
          <div className={styles.gettingStartedText}>
            <div className={styles.gettingStartedOne}>SailPoint Developer Community</div>
            <div className={styles.gettingStartedTwo}>Don't know where to get started?</div>
            <div className={styles.gettingStartedThree}>Jump into our <span className={styles.bold}>Get Started Guides</span> for more information.</div>
          </div>
          <div className={styles.gridContainer}>
            <Link to="/docs/idn_docs/intro">
              <div className={styles.getStartedCard}>
                <img className={styles.gettingStartedCardIcon} src="/homepage/cloud.png"></img>
                <img className={styles.gettingStartedCardArrow} src="/homepage/arrow-right.png"></img>
                <div className={styles.gettingStartedCardText}>Get Started with IdentityNow</div>
              </div>
            </Link>
            <Link to="/docs/idn_docs/intro">
              <div className={styles.getStartedCard}>
                <img className={styles.gettingStartedCardIcon} src="/homepage/cloud.png"></img>
                <img className={styles.gettingStartedCardArrow} src="/homepage/arrow-right.png"></img>
                <div className={styles.gettingStartedCardText}>Get Started with IdentityIQ</div>
              </div>
            </Link>
          </div> 
        </div>
        <div >
          <Carousel className={styles.carousel} variant="dark">
            <Carousel.Item>
            <iframe className={styles.video} src="https://www.youtube.com/embed/N-JG8xjpKaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Carousel.Item>
          <Carousel.Item>
              <iframe className={styles.video} src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
