import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageGettingStarted from '@site/src/components/homepage/HomepageGettingStarted';
import HomepageBasics from '../components/homepage/HomepageBasics';
import HomepageTrainingGuides from '../components/homepage/HomepageTrainingGuides';
import HomepageDiscuss from '../components/homepage/HomepageDiscuss';
import HomepageTeam from '../components/homepage/HomepageTeam';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
      </main>
    </Layout>
  );
}
