import React from 'react';
import Layout from '@theme/Layout';
import styles from './filter.module.css';
import MarketplaceCards from '../../components/marketplace/MarketplaceCards';
import MarketplaceBanner from '../../components/marketplace/MarketplaceBanner';

export default function Workflows() {
  const [filteredProduct] = React.useState({
    category: 'colab-iiq-plugins',
    tags: ['Identityiq'],
  });

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
      <MarketplaceBanner />
        <div>
          <div className={styles.cardContainer}>
            <MarketplaceCards filterCallback={filteredProduct} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
