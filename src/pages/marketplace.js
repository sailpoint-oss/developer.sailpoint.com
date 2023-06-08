import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MarketplaceBanner from '../components/marketplace/MarketplaceBanner';

import styles from './marketplace.module.css';
import MarketplaceCards from '../components/marketplace/MarketplaceCards';
import MarketplaceSidebar from '../components/marketplace/MarketplaceSidebar';

export default function Marketplace() {
  const [filteredProduct, setFilteredProduct] = React.useState([]);

  const {siteConfig} = useDocusaurusContext();

  const handleClick = (data) => {
    var tempFilter = filteredProduct.slice()

    const index = tempFilter.indexOf(data);
    if (index !== -1) {
      tempFilter.splice(index, 1);
    } else {
      tempFilter.push(data)
    }

    setFilteredProduct(tempFilter)
  };
  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
      <MarketplaceBanner />
      <div className={styles.blogContainer}>
          <div className={styles.blogSidbarContainer}><MarketplaceSidebar filterCallback={handleClick}/></div>
          <div className={styles.blogCardContainer}><MarketplaceCards filterCallback={filteredProduct}/></div>
      </div>
      
      </main>
    </Layout>
  );
}
