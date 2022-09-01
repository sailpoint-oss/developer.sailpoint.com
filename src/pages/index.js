import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageGettingStarted from '@site/src/components/HomepageGettingStarted';
import HomepageBasics from '../components/HomepageBasics';
import HomepageTrainingGuides from '../components/HomepageTrainingGuides';
import HomepageDiscuss from '../components/HomepageDiscuss';
import HomepageTeam from '../components/HomepageTeam'

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageGettingStarted />
        <HomepageBasics description={"If you still aren't sure where to get started, try one of the <b>Getting Started Guides</b> below, or see what our platform has to offer."} link={"/docs/idn_docs/intro"} title={"Start With the Basics"} image={"/homepage/person-head.png"} buttonText={"Explore our platform"} />
        <HomepageTrainingGuides></HomepageTrainingGuides>
        <HomepageBasics description={"The SailPoint Developer Forums are a great place to find solutions to common development problems."} link={"/docs/idn_docs/intro"} title={"What is the Community saying?"} image={"/homepage/discuss.png"} buttonText={"Join the Discussion"}/>
        <HomepageDiscuss></HomepageDiscuss>
        <HomepageBasics description={"The Developer Relations team is responsible for creating a better developer experience on our platform. Click on someone to learn more about them!"} link={"/docs/idn_docs/intro"} title={"Meet Our Team"} image={"/homepage/team.png"} buttonText={""}/>
        <HomepageTeam></HomepageTeam>
      </main>
    </Layout>
  );
}
