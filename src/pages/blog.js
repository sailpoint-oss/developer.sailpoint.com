import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlogBanner from '../components/blog/BlogBanner';

import styles from './blog.module.css';
import BlogCards from '../components/blog/BlogCards';

export default function Blog() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
      <BlogBanner />
      <BlogCards />
      </main>
    </Layout>
  );
}
