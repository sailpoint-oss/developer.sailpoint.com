import React from 'react';
import Layout from '@theme/Layout';
import HomepageGettingStarted from '@site/src/components/homepage/HomepageGettingStarted';
import HomepageBasics from '@site/src/components/homepage/HomepageBasics';
import HomepageTrainingGuides from '@site/src/components/homepage/HomepageTrainingGuides';
import HomepageDiscuss from '@site/src/components/homepage/HomepageDiscuss';

const PageLayout = React.memo(Layout as unknown as (props: {
  description: string;
  children: React.ReactNode;
}) => JSX.Element);

export default function Home(): JSX.Element {
  return (
    <PageLayout description="SailPoint Developers gives you everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <HomepageGettingStarted />
        <HomepageBasics
          description={
            'See resolved solutions and active discussions from developers building with SailPoint.'
          }
          link={'https://developer.sailpoint.com/discuss/'}
          title={'Active forum discussions'}
          image={'discuss'}
          buttonText={'Visit the forum'}
        />
        <HomepageDiscuss />
        <HomepageBasics
          description={
            "If you still aren't sure where to start, try one of the <b>getting started guides</b> below or browse developer tools and API resources."
          }
          link={'/docs/tools'}
          title={'Start with the basics'}
          image={'user'}
          buttonText={'Explore developer tools'}
        />
        <HomepageTrainingGuides />
        <HomepageBasics
          description={
            "The Developer Relations team helps improve the developer experience across SailPoint platforms. Learn who we are and how to contact us."
          }
          link={'/devrel-team'}
          title={'Need help from Developer Relations?'}
          image={'team'}
          buttonText={'Meet the team'}
        />
      </main>
    </PageLayout>
  );
}
