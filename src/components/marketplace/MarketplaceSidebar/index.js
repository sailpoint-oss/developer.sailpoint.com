import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { getCatagories, getTags } from '../../../services/DiscourseService';
import MarketplaceSidebarButton from './MarketplaceSidebarButton';
import {discourseMarketplaceCatagoryId, discourseProductTag} from '../../../util/util'

export default function MarketplaceSidebar({
  filterCallback,
  selectedCategory
  }) {
  const [tagProductData, setTagProductData] = React.useState();
  const [tagTechnologyData, setTagTechnologyData] = React.useState();
  const [catIntegrationTypeData, setCatIntegrationTypeData] = React.useState();
  const [filterTags, setFilterTags] = React.useState(true);

  const getTagData = async () => {
    const tagData = await getTags();
    const categoryData = await getCatagories();

    const tagTechnologyResultset = []
    const tagProductResultset = []
    const catIntegrationType = []

    for (const category of categoryData.category_list.categories) {
      // 59 for production marketplace, 57 for staging marketplace
      if (category.id === discourseMarketplaceCatagoryId()) {
        for (const subCategory of category.subcategory_list) {
          
          catIntegrationType.push({"name": subCategory.name, "slug": subCategory.slug})
        }
      }
    }
    for (const tagGroup of tagData.extras.tag_groups) {
      // 20 for production marketplace, 11 for staging marketplace
      if (tagGroup.id === discourseProductTag()) {
        for (const tag of tagGroup.tags) {
          tagProductResultset.push(tag.text)
        }
      }
      if (tagGroup.id === 17) {
        for (const tag of tagGroup.tags) {
          tagTechnologyResultset.push(tag.text)
        }
      }
    }
    setTagProductData(tagProductResultset)
    setTagTechnologyData(tagTechnologyResultset)
    setCatIntegrationTypeData(catIntegrationType)
  };

  function toggleSeeAll() {
    filterTags ? setFilterTags(false) : setFilterTags(true)
  }

  function uppercaseText(text) {
    if (text === 'identitynow') {
      return 'IdentityNow'
    }
    if (text === 'identityiq') {
      return 'IdentityIQ'
    }
    if (text === 'nerm') {
      return 'NERM'
    }

  }
  

  React.useEffect(() => {
    getTagData();
  }, []);

  const filterText = filterTags ? 'See All Tags' : 'See Less Tags'

  if (tagProductData && catIntegrationTypeData) {
    return (
      <div className={styles.sidebar}>
        <div className={styles.tagHeader}>Items by Product</div>
        <div className={styles.tagContainer}>
            {tagProductData.map(function(a, index){
              return <MarketplaceSidebarButton key={a} text={uppercaseText(a)} id={a} filterCallback={filterCallback}></MarketplaceSidebarButton>
            })}
        </div>
        <div className={styles.tagHeader}>Items by Integration Type</div>
        <div className={styles.tagContainer}>
            {catIntegrationTypeData.map(function(a, index){
              return <MarketplaceSidebarButton category={selectedCategory} isCategory={true} key={a.slug} text={a.name} id={a.slug} filterCallback={filterCallback}></MarketplaceSidebarButton>
            })}
        </div>
      </div>
      
    );
  } else {
    return <div></div>;
  }
}
