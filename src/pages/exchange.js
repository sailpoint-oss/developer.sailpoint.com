import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ExchangeBanner from '../components/exchange/ExchangeBanner';

import styles from './exchange.module.css';
import ExchangeCards from '../components/exchange/ExchangeCards';
import ExchangeSidebar from '../components/exchange/ExchangeSidebar';

export default function Exchange() {
  const [filteredProduct, setFilteredProduct] = React.useState({"category": "exchange", "tags": []});

  const {siteConfig} = useDocusaurusContext();

  const handleClick = (data) => {
    var tempFilter = filteredProduct.tags.slice()

    if (data.tag) {
      const index = tempFilter.indexOf(data.tag);
      if (index !== -1) {
        tempFilter.splice(index, 1);
      } else {
        tempFilter.push(data.tag)
      }
    }

    if (data.category) {
      setFilteredProduct({"category": data.category, "tags": tempFilter})
    } else {
      setFilteredProduct({"category": filteredProduct.category, "tags": tempFilter})
    }

    
  };
  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
      <ExchangeBanner />
      <div className={styles.blogContainer}>
          <div className={styles.blogSidbarContainer}><ExchangeSidebar selectedCategory={filteredProduct.category} filterCallback={handleClick}/></div>
          <div className={styles.blogCardContainer}><ExchangeCards filterCallback={filteredProduct}/></div>
      </div>
      
      </main>
    </Layout>
  );
}
