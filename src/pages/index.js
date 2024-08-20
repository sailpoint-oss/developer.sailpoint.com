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
        <HomepageGettingStarted />
        {/* <HomepageDeveloperDays /> */}
        <HomepageBasics
          description={
            "If you still aren't sure where to get started, try one of the <b>Getting Started Guides</b> below, or see what our platform has to offer."
          }
          link={'https://www.sailpoint.com/products/IdentityNow/'}
          title={'Start With the Basics'}
          image={'user'}
          buttonText={'Explore our platform'}
        />
        <HomepageTrainingGuides />
        <HomepageBasics
          description={
            'The SailPoint Developer Forums are a great place to find solutions to common development problems.'
          }
          link={'https://developer.sailpoint.com/discuss/'}
          title={'What is the Community saying?'}
          image={'discuss'}
          buttonText={'Join the Discussion'}
        />

        <HomepageDiscuss />
        <div>
          <HomepageBasics
            description={
              "The Developer Relations team is responsible for creating a better developer experience on our platform. Click on someone to reach out to them, or <a href='https://developer.sailpoint.com/discuss/new-message?groupname=developer_relations/'>contact our team directly</a>."
            }
            title={'Meet Our Team'}
            image={'team'}
            buttonText={''}
          />
          <HomepageTeam />
        </div>
      </main>
    </Layout>
  );
}
