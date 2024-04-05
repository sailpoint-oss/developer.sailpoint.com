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
              Join us for our annual conference for developers in April!
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
        <div className={styles.devDaysImageContainer}>
          <ThemedImage
            className={styles.cardIcon}
            sources={{
              light: useBaseUrl('/homepage/devdays2024-sm.png'),
              dark: useBaseUrl('/homepage/devdays2024-dark-sm.png'),
            }}
          />
        </div>
      </div>
    </div>
  );
}
