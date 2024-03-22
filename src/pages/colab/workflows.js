import React from 'react';
import Layout from '@theme/Layout';

import styles from './filter.module.css';

import BlogSidebar from '../../components/blog/BlogSidebar';
import MarketplaceCards from '../../components/marketplace/MarketplaceCards';
import MarketplaceBanner from '../../components/marketplace/MarketplaceBanner';

export default function Workflows() {
  const [filteredProduct, setFilteredProduct] = React.useState({
    category: 'colab',
    tags: ['workflows'],
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
      category: 'colab-workflows',
      tags: tempFilter,
    });
  };
  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <MarketplaceBanner />
        <div>
          <div className={styles.filterContainer}>
            <BlogSidebar filterCallback={handleClick} />
          </div>
          <div className={styles.blogCardContainer}>
            <MarketplaceCards filterCallback={filteredProduct} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
