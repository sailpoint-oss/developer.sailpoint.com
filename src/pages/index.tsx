import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageGettingStarted from '@site/src/components/homepage/HomepageGettingStarted';
import HomepageBasics from '@site/src/components/homepage/HomepageBasics';
import HomepageTrainingGuides from '@site/src/components/homepage/HomepageTrainingGuides';
import HomepageDiscuss from '@site/src/components/homepage/HomepageDiscuss';
import HomepageTeam from '@site/src/components/homepage/HomepageTeam';
import HomepageDeveloperDays from '@site/src/components/homepage/HomepageDeveloperDays';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import React from 'react';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        {/* <HomepageDeveloperDays /> */}
        <HomepageGettingStarted />
        <HomepageBasics
          description={
            "If you still aren't sure where to get started, try one of the <b>Getting Started Guides</b> below, or see what our platform has to offer."
          }
          link={'https://www.sailpoint.com/products/identity-security-cloud'}
          title={'Start with the basics'}
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
            link={''}
            description={
              "The Developer Relations team is responsible for creating a better developer experience on our platform. Click on someone to reach out to them, or <a href='https://developer.sailpoint.com/discuss/new-message?groupname=developer_relations/'>contact our team directly</a>."
            }
            title={'Meet our team'}
            image={'team'}
            buttonText={''}
          />
          <HomepageTeam />
        </div>
      </main>
    </Layout>
  );
}
