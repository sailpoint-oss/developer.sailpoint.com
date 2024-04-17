import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import HomepageCard from '../HomepageCard';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
export default function HomepageGettingStarted() {
  return (
    <div>
      <div className={styles.mainCard}>
        <div className={styles.contentContainer}>
          <div className={styles.gettingStartedText}>
            <div className={styles.gettingStartedOne}>
              SailPoint Developer Days
            </div>
            <div className={styles.gettingStartedTwo}>
              Join us live for developer days!
            </div>
            <div className={styles.gettingStartedThree}>
              Our largest conference for developers, architects, administrators,
              and more is finally here! Explore
              <span className={styles.bold}> cutting-edge technologies</span>,
              gain insights from industry leaders, and connect with fellow
              developers.
            </div>
          </div>
          <div className={styles.gridContainer}>
            <div>
              <a
                href="https://developer.sailpoint.com/discuss/developerdays"
                className={styles.registerButtonPink}>
                Register now
              </a>
            </div>
          </div>
        </div>
        <div className={styles.carousel}>
        <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/MYhWuqAAUvY?si=GPhe53efO7QLJ_RJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}
