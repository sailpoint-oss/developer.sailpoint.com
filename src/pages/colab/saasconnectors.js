import React from 'react';
import Layout from '@theme/Layout';

import styles from './filter.module.css';

import BlogSidebar from '../../components/blog/BlogSidebar';
import MarketplaceCards from '../../components/marketplace/MarketplaceCards';
import MarketplaceBanner from '../../components/marketplace/MarketplaceBanner';

export default function SaasConnector() {
  const [filteredProduct, setFilteredProduct] = React.useState({
    category: 'colab-saas-connectors',
    tags: [],
  });

  const handleClick = (data) => {
    var tempFilter = [];

    const index = tempFilter.indexOf(data);
    if (index !== -1) {
      tempFilter.splice(index, 1);
    } else {
      tempFilter.push(data);
    }

    setFilteredProduct({
      category: 'colab-saas-connectors',
      tags: tempFilter,
    });
  };
  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <MarketplaceBanner />
        <div className={styles.container}>
          <div className={styles.filterContainer}>
            <BlogSidebar filterCallback={handleClick} isChecked={true} />
          </div>
          <div className={styles.cardContainer}>
            <MarketplaceCards filterCallback={filteredProduct} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
