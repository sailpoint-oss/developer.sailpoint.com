import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AmbassadorBanner from '../components/ambassador/AmbassadorBanner';

import styles from './ambassador.module.css';
import AmbassadorCards from '../components/ambassador/AmbassadorCards';

export default function Ambassador() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <AmbassadorBanner />
        <div className={styles.gettingStartedText}>
          <div className={styles.gettingStartedOne}>Expert Ambassadors</div>
        </div>
        <div className={styles.ambassadorCardContainer}>
          <AmbassadorCards expert={true} />
        </div>
        <div className={styles.gettingStartedText}>
          <div className={styles.gettingStartedOne}>Ambassadors</div>
        </div>
        <div className={styles.ambassadorCardContainer}>
          <AmbassadorCards expert={false} />
        </div>
      </main>
    </Layout>
  );
}
