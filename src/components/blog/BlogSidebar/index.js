import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { getTags } from '../../../services/DiscourseService';
import BlogSidebarButton from './BlogSidebarButton';

export default function BlogSidebar({
  filterCallback
  }) {
  const [tagProductData, setTagProductData] = React.useState();
  const [tagTechnologyData, setTagTechnologyData] = React.useState();
  const [filteredProduct, setFilteredProduct] = React.useState();

  const getTagData = async () => {
    const data = await getTags();
    console.log(data.extras.tag_groups)
    const tagTechnologyResultset = []
    const tagProductResultset = []
    for (const tagGroup of data.extras.tag_groups) {
      if (tagGroup.id === 20) {
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
  };

  React.useEffect(() => {
    getTagData();
  }, []);

  function setFilters(e, f) {
    e.currentTarget.classList.toggle('selected');
    console.log(e)
    filterCallback(f)
  }

  if (tagProductData && tagTechnologyData) {
    return (
      <div className={styles.sidebar}>
        <div className={styles.tagHeader}>Posts by Product</div>
        <div className={styles.tagContainer}>
            {tagProductData.map(function(a, index){
              return <BlogSidebarButton key={a} text={a} filterCallback={filterCallback}></BlogSidebarButton>
              // return <div key={a} onClick={(e) => setFilters(e, a)} className={styles.tag}>{a}</div>
            })}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
