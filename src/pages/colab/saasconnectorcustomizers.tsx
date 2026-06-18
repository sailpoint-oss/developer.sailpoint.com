import Layout from '@theme/Layout';
import { useState, type FC } from 'react';
import BlogSidebar from '../../components/blog/BlogSidebar';
import MarketplaceBanner from '../../components/marketplace/MarketplaceBanner';
import MarketplaceCards from '../../components/marketplace/MarketplaceCards';
import styles from './filter.module.css';

// Define the type for the filter state
interface FilterState {
  category: string;
  tags: string[];
}

const SaasConnectorCustomizers: FC = () => {
  const [filteredProduct, setFilteredProduct] = useState<FilterState>({
    category: 'saas-connector-customizers',
    tags: [],
  });

  const handleClick = (data: string) => {
    setFilteredProduct((prevFilter) => {
      const updatedTags = prevFilter.tags.includes(data)
        ? prevFilter.tags.filter((tag) => tag !== data) // Remove tag if exists
        : [...prevFilter.tags, data]; // Add tag if not exists

      return {
        category: 'saas-connector-customizers',
        tags: updatedTags,
      };
    });
  };

  return (
    <Layout title="SaaS connector customizers" description="Find community-built SaaS connector customizers in the CoLab marketplace.">
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
};

export default SaasConnectorCustomizers;
