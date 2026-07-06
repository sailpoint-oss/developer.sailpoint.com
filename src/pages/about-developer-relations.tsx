import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import HomepageBasics from '@site/src/components/homepage/HomepageBasics';
import HomepageTeam from '@site/src/components/homepage/HomepageTeam';
import React from 'react';

export default function AboutDeveloperRelations(): ReactNode {
  return (
    <Layout
      title="About Developer Relations"
      description="Meet the SailPoint Developer Relations team responsible for creating a better developer experience on our platform."
    >
      <main>
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
