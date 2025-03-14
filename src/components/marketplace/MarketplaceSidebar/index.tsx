import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { getCatagories, getTags } from '../../../services/DiscourseService';
import MarketplaceSidebarButton from './MarketplaceSidebarButton';
import {
  discourseMarketplaceCatagoryId,
  discourseProductTag,
} from '../../../util/util';

// Define the props interface
interface MarketplaceSidebarProps {
  filterCallback: (filter: { category?: string; tag?: string }) => void;
  selectedCategory?: string;
}

// Define the state types
interface Category {
  name: string;
  slug: string;
}

const MarketplaceSidebar: React.FC<MarketplaceSidebarProps> = ({ filterCallback, selectedCategory }) => {
  const [tagProductData, setTagProductData] = useState<string[] | null>(null);
  const [tagTechnologyData, setTagTechnologyData] = useState<string[] | null>(null);
  const [catIntegrationTypeData, setCatIntegrationTypeData] = useState<Category[] | null>(null);
  const [filterTags, setFilterTags] = useState<boolean>(true);

  const getTagData = async () => {
    const tagData = await getTags();
    const categoryData = await getCatagories();

    const tagTechnologyResultset: string[] = [];
    const tagProductResultset: string[] = [];
    const catIntegrationType: Category[] = [];

    for (const category of categoryData.category_list.categories) {
      if (category.id === discourseMarketplaceCatagoryId()) {
        for (const subCategory of category.subcategory_list) {
          catIntegrationType.push({
            name: subCategory.name,
            slug: subCategory.slug,
          });
        }
      }
    }

    for (const tagGroup of tagData.extras.tag_groups) {
      if (tagGroup.id === discourseProductTag()) {
        tagProductResultset.push(...tagGroup.tags.map((tag) => tag.text));
      }
      if (tagGroup.id === 17) {
        tagTechnologyResultset.push(...tagGroup.tags.map((tag) => tag.text));
      }
    }

    setTagProductData(tagProductResultset);
    setTagTechnologyData(tagTechnologyResultset);
    setCatIntegrationTypeData(catIntegrationType);
  };

  const toggleSeeAll = () => {
    setFilterTags((prev) => !prev);
  };

  const uppercaseText = (text: string): string => {
    switch (text) {
      case 'identitynow':
        return 'IdentityNow';
      case 'identityiq':
        return 'IdentityIQ';
      case 'nerm':
        return 'NERM';
      default:
        return text
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
    }
  };

  useEffect(() => {
    getTagData();
  }, []);

  if (tagProductData && catIntegrationTypeData) {
    return (
      <div className={styles.sidebar}>
        <div className={styles.tagHeader}>Items by Product</div>
        <div className={styles.tagContainer}>
          {tagProductData.map((tag) => (
            <MarketplaceSidebarButton
              key={tag}
              text={uppercaseText(tag)}
              id={tag}
              filterCallback={filterCallback}
            />
          ))}
        </div>
        <div className={styles.tagHeader}>Items by Integration Type</div>
        <div className={styles.tagContainer}>
          {catIntegrationTypeData.map((category) => (
            <MarketplaceSidebarButton
              key={category.slug}
              category={selectedCategory}
              isCategory={true}
              text={category.name}
              id={category.slug}
              filterCallback={filterCallback}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default MarketplaceSidebar;
