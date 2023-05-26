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
  const [filterTags, setFilterTags] = React.useState(true);

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

  function toggleSeeAll() {
    filterTags ? setFilterTags(false) : setFilterTags(true)
  }
  

  React.useEffect(() => {
    getTagData();
  }, []);

  const filterText = filterTags ? 'See All Tags' : 'See Less Tags'

  if (tagProductData && tagTechnologyData) {
    return (
      <div className={styles.sidebar}>
        <div className={styles.tagHeader}>Posts by Product</div>
        <div className={styles.tagContainer}>
            {tagProductData.map(function(a, index){
              return <BlogSidebarButton key={a} text={a} filterCallback={filterCallback}></BlogSidebarButton>
            })}
        </div>
        <div className={styles.tagHeader}>Posts by Identity Governance</div>
        <div className={styles.tagContainer}>
            {tagTechnologyData.map(function(a, index){
              return <div className={index > 10 && filterTags ? styles.hidden : ''} > <BlogSidebarButton key={a} text={a} filterCallback={filterCallback}></BlogSidebarButton></div>
            })}
        </div>
        <div className={styles.seeAll} onClick={(e) => toggleSeeAll()}>
          {filterText}
          {/* <img className={styles.caretDown} src={useBaseUrl('/blog/caret-down-thin.svg')}></img> */}
        </div>
      </div>
      
    );
  } else {
    return <div></div>;
  }
}
