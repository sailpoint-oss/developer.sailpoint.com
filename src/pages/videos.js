import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import VideoCards from '../components/video-library/VideoCards';
export default function VideoLibrary() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div>
          <VideoCards />
        </div>
      </main>
    </Layout>
  );
}
