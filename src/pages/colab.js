import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MarketplaceBanner from '../components/marketplace/MarketplaceBanner';

import styles from './exchange.module.css';
import MarketplaceCards from '../components/marketplace/MarketplaceCards';
import MarketplaceSidebar from '../components/marketplace/MarketplaceSidebar';

export default function Marketplace() {
  const [filteredProduct, setFilteredProduct] = React.useState({"category": "colab", "tags": []});

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
      <MarketplaceBanner />
      <div className={styles.blogContainer}>
          <div className={styles.blogSidbarContainer}><MarketplaceSidebar selectedCategory={filteredProduct.category} filterCallback={handleClick}/></div>
          <div className={styles.blogCardContainer}><MarketplaceCards filterCallback={filteredProduct}/></div>
      </div>
      
      </main>
    </Layout>
  );
}
