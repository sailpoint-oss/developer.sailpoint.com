import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './filter.module.css';
import MarketplaceCards from '../../components/marketplace/MarketplaceCards';
import MarketplaceBanner from '../../components/marketplace/MarketplaceBanner';

// Define the type for the filter state
interface FilterState {
  category: string;
  tags: string[];
}

const Plugins: React.FC = () => {
  const [filteredProduct] = useState<FilterState>({
    category: 'colab-iiq-plugins',
    tags: ['Identityiq'],
  });

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <MarketplaceBanner />
        <div className={styles.container}>
          <div className={styles.cardContainer}>
            <MarketplaceCards filterCallback={filteredProduct} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Plugins;
