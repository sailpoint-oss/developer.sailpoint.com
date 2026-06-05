import { useState, type FC } from 'react';
import Layout from '@theme/Layout';
import styles from './filter.module.css';
import MarketplaceCards from '../../components/marketplace/MarketplaceCards';
import MarketplaceBanner from '../../components/marketplace/MarketplaceBanner';

// Define the type for the filter state
interface FilterState {
  category: string;
  tags: string[];
}

const Plugins: FC = () => {
  const [filteredProduct] = useState<FilterState>({
    category: 'colab-iiq-plugins',
    tags: ['Identityiq'],
  });

  return (
    <Layout title="IdentityIQ plugins" description="Find community-built IdentityIQ plugins in the CoLab marketplace.">
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
