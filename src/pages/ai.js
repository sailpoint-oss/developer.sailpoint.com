import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';
import Header from '../components/ServicesAI/Header';
import Content from '../components/ServicesAI/Content';

export default function AI() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <Header />
        <BrowserOnly>
          <Content />
        </BrowserOnly>
      </main>
    </Layout>
  );
}
