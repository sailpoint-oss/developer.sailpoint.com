import React from 'react';
import Layout from '@theme/Layout';

import HomepageCarousel from '../components/HomepageCarousel';
import AmbassadorSpotlight from '../components/AmbassadorSpotlight';
import HomepageHeader from '../components/HomepageHeader';
import DeveloperResources from '../components/DeveloperResources';
import StartBuilding from '../components/StartBuilding';

export default function Home() {
  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <div className="bg-background">
        <HomepageHeader />
        <HomepageCarousel />
        <DeveloperResources />
        <AmbassadorSpotlight />
        <StartBuilding />
      </div>
    </Layout>
  );
}
