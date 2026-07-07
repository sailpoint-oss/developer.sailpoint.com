import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';
import styles from './filter.module.css';
import BlogSidebar from '../../components/blog/BlogSidebar';
import MarketplaceCards from '../../components/marketplace/MarketplaceCards';
import MarketplaceBanner from '../../components/marketplace/MarketplaceBanner';

interface FilterState {
  category: string;
  tags: string[];
}

interface ColabCategory {
  id: string;
  label: string;
  category: string;
  tags?: string[];
}

const PRODUCT_TAGS = ['identity-security-cloud', 'Identityiq'];

const COLAB_CATEGORIES: ColabCategory[] = [
  { id: 'all', label: 'All CoLab Solutions', category: 'colab' },
  { id: 'workflows', label: 'Workflows', category: 'colab', tags: ['workflows'] },
  { id: 'saas-connectors', label: 'SaaS Connectors', category: 'colab-saas-connectors' },
  {
    id: 'saas-connector-customizers',
    label: 'SaaS Connector Customizers',
    category: 'saas-connector-customizers',
  },
  { id: 'community-tools', label: 'Community Tools', category: 'colab-community-tools' },
  { id: 'rules', label: 'Rules', category: 'colab-rules' },
  { id: 'transforms', label: 'Transforms', category: 'colab-transforms' },
  { id: 'iiq-plugins', label: 'IIQ Plugins', category: 'colab-iiq-plugins' },
];

const getCategoryFromSearch = (search: string): ColabCategory => {
  const params = new URLSearchParams(search);
  const categoryId = params.get('category') ?? 'all';
  return COLAB_CATEGORIES.find((item) => item.id === categoryId) ?? COLAB_CATEGORIES[0];
};

const CoLabItems: React.FC = () => {
  const location = useLocation();
  const initialCategory = getCategoryFromSearch(location.search);
  const [selectedCategoryId, setSelectedCategoryId] = useState(initialCategory.id);
  const [filteredProduct, setFilteredProduct] = useState<FilterState>({
    category: initialCategory.category,
    tags: initialCategory.tags ?? [],
  });

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = event.target.value;
    const selected = COLAB_CATEGORIES.find((item) => item.id === categoryId);
    if (!selected) return;

    setSelectedCategoryId(categoryId);
    setFilteredProduct((prev) => {
      const productTags = prev.tags.filter((tag) => PRODUCT_TAGS.includes(tag));
      return {
        category: selected.category,
        tags: [...(selected.tags ?? []), ...productTags],
      };
    });
  };

  const handleProductClick = (data: string) => {
    setFilteredProduct((prev) => {
      const updatedTags = prev.tags.includes(data)
        ? prev.tags.filter((tag) => tag !== data)
        : [...prev.tags, data];

      return {
        ...prev,
        tags: updatedTags,
      };
    });
  };

  useEffect(() => {
    const categoryFromUrl = getCategoryFromSearch(location.search);
    setSelectedCategoryId(categoryFromUrl.id);
    setFilteredProduct((prev) => {
      const productTags = prev.tags.filter((tag) => PRODUCT_TAGS.includes(tag));
      return {
        category: categoryFromUrl.category,
        tags: [...(categoryFromUrl.tags ?? []), ...productTags],
      };
    });
  }, [location.search]);

  return (
    <Layout
      title="CoLab Solutions"
      description="Here you can find ready-to-use Workflows, SaaS Connectors, Rules, Transforms, IIQ Plugins, and more built and maintained by your fellow peers in the community."
    >
      <main>
        <MarketplaceBanner />
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>CoLab Solutions</h1>
          <p className={styles.pageDescription}>
            Here you can find ready-to-use Workflows, SaaS Connectors, Rules, Transforms, IIQ
            Plugins, and more built and maintained by your fellow peers in the community.
          </p>
        </div>
        <section className={styles.filterSection} aria-label="Filter CoLab items">
          <h2 className={styles.filterSectionTitle}>Filters</h2>
          <p className={styles.filterSectionDescription}>
            Refine results by integration type or product.
          </p>
          <div className={styles.filterGroup}>
            <label className={styles.filterGroupTitle} htmlFor="colab-category">
              Integration Type
            </label>
            <select
              id="colab-category"
              className={styles.categorySelect}
              value={selectedCategoryId}
              onChange={handleCategoryChange}
            >
              {COLAB_CATEGORIES.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.filterGroup}>
            <h3 className={styles.filterGroupTitle}>Product</h3>
            <BlogSidebar filterCallback={handleProductClick} />
          </div>
        </section>
        <div className={styles.container}>
          <div className={styles.cardContainer}>
            <MarketplaceCards filterCallback={filteredProduct} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default CoLabItems;
