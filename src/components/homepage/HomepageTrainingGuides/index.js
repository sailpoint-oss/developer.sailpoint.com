import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import HomepageCard from '../HomepageCard';
export default function HomepageTrainingGuides() {
  return (
    <div className={styles.center}>
      <div className={styles.gridContainer}>
        <HomepageCard
          product={'isc'}
          link={'/api/getting-started'}
          title={'Make Your First API Call'}
          image={'/homepage/cloud-data.svg'}></HomepageCard>
        <HomepageCard
          product={'isc'}
          link={'/extensibility/transforms/guides/your-first-transform'}
          title={'Build a Transform'}
          image={'/homepage/process.svg'}></HomepageCard>
        <HomepageCard
          product={'isc'}
          link={'/connectivity/saas-connectivity'}
          title={'Build a SaaS Connector'}
          image={'/homepage/connectivity.svg'}></HomepageCard>
        <HomepageCard
          product={'iiq'}
          link={
            'https://documentation.sailpoint.com/identityiq/help/plugins/identityiq_plugins.html'
          }
          title={'Build an IIQ Plugin'}
          image={'/homepage/puzzle.svg'}
          isThemedImage={true}></HomepageCard>
      </div>
    </div>
  );
}
