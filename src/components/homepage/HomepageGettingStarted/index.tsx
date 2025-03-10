import React from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import HomepageCard from '../HomepageCard';

export default function HomepageGettingStarted(): ReactNode {  
  return (
    <div>
      <div className={styles.mainCard}>
        <div className={styles.contentContainer}>
          <div className={styles.gettingStartedText}>
            <div className={styles.gettingStartedOne}>
              SailPoint Developer Community
            </div>
            <div className={styles.gettingStartedTwo}>
              Don't know where to get started?
            </div>
            <div className={styles.gettingStartedThree}>
              Jump into our{' '}
              <span className={styles.bold}>Get Started Guides</span> for more
              information.
            </div>
          </div>
          <div className={styles.gridContainer}>
            <HomepageCard
              link="/docs"
              title="Get Started with Identity Security Cloud"
              image="/homepage/SailPointIdentitySecurityCloud.svg"
              product={null}
            />
            <HomepageCard
              link="https://documentation.sailpoint.com/identityiq/help/iiqlandingpage.html"
              title="Get Started with IdentityIQ"
              image="/homepage/IdentityIQ.svg"
              product={null}
            />
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
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
