import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Main from '../components/stream/main';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Stream() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <BrowserOnly>
        <main>
          <Main></Main>
        </main>
      </BrowserOnly>
    </Layout>
  );
}
