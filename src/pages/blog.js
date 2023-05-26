import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlogBanner from '../components/blog/BlogBanner';

import styles from './blog.module.css';
import BlogCards from '../components/blog/BlogCards';
import BlogSidebar from '../components/blog/BlogSidebar';

export default function Blog() {
  const [filteredProduct, setFilteredProduct] = React.useState();

  const {siteConfig} = useDocusaurusContext();

  const handleClick = (data) => {
    console.log(data)
    
    setFilteredProduct(data)
  };
  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
      <BlogBanner />
      <div className={styles.blogContainer}>
          <div className={styles.blogSidbarContainer}><BlogSidebar filterCallback={handleClick}/></div>
          <div className={styles.blogCardContainer}><BlogCards filterCallback={filteredProduct}/></div>
      </div>
      
      </main>
    </Layout>
  );
}
