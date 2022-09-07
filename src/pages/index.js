import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageGettingStarted from '@site/src/components/homepage/HomepageGettingStarted';
import HomepageBasics from '../components/homepage/HomepageBasics';
import HomepageTrainingGuides from '../components/homepage/HomepageTrainingGuides';
import HomepageDiscuss from '../components/homepage/HomepageDiscuss';
import HomepageTeam from '../components/homepage/HomepageTeam'

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageGettingStarted />
        <HomepageBasics
            description={"If you still aren't sure where to get started, try one of the <b>Getting Started Guides</b> below, or see what our platform has to offer."}
            link={"/docs/idn_docs/intro"}
            title={"Start With the Basics"}
            image={"/homepage/person-head.png"}
            buttonText={"Explore our platform"} />
        <HomepageTrainingGuides></HomepageTrainingGuides>
        <HomepageBasics
            description={"The SailPoint Developer Forums are a great place to find solutions to common development problems."}
            link={"/docs/idn_docs/intro"}
            title={"What is the Community saying?"}
            image={"/homepage/discuss.png"}
            buttonText={"Join the Discussion"}/>
        <HomepageDiscuss></HomepageDiscuss>
        <HomepageBasics
        description={"The Developer Relations team is responsible for creating a better developer experience on our platform. Click on someone to learn more about them!"}
        link={"/docs/idn_docs/intro"}
        title={"Meet Our Team"}
        image={"/homepage/team.png"}
        buttonText={""}/>
        <HomepageTeam></HomepageTeam>
      </main>
    </Layout>
  );
}
