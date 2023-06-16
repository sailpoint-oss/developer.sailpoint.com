import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AmbassadorBanner from '../components/ambassador/AmbassadorBanner';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './ambassador.module.css';
import AmbassadorCards from '../components/ambassador/AmbassadorCards';

export default function Ambassador() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        {/* <AmbassadorBanner /> */}
        <div className={styles.ambassadorPurposeContainer}>
          <img
            className={styles.ambassadorPurposeImage}
            src={useBaseUrl('/ambassador/Ambassador-Program-Banner.png')}></img>
          <div className={styles.ambassadorPurposeText}>
            Our global team of ambassadors empower their communities and help
            make the Internet a safer place by attending and hosting meetups,
            conferences, and other events that focus on authentication, security
            and identity topics.
            <div className={styles.button}>
              <Link className={styles.link} to="https://developer.sailpoint.com/discuss/t/announcing-the-developer-community-ambassador-program/10634">
                Become an Ambassador
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.headerText}>
          <div className={styles.headerTextOne}>Expert Ambassadors</div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.spanLeft}></div>
          <img
            className={styles.ambassadorImage}
            src={useBaseUrl('/ambassador/AmbassadorBadge-Pink-Hex.png')}></img>
          <div className={styles.spanLeft}></div>
        </div>
        <div className={styles.ambassadorCardContainer}>
          <AmbassadorCards expert={true} />
        </div>
        <div className={styles.headerText}>
          <div className={styles.headerTextOne}>Ambassadors</div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.spanLeft}></div>
          <img
            className={styles.ambassadorImage}
            src={useBaseUrl(
              '/ambassador/AmbassadorBadge-QuadGrad-Squircle.png',
            )}></img>
          <div className={styles.spanLeft}></div>
        </div>

        <div className={styles.ambassadorCardContainer}>
          <AmbassadorCards expert={false} />
        </div>
      </main>
    </Layout>
  );
}
