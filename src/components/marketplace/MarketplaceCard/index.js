import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import {addDarkToFileName} from '../../../util/util';
import ReactMarkdown from 'react-markdown';
export default function MarketplaceCard({post, openDialogFunc}) {
  function setFilters(e) {
    openDialogFunc({
      title: post.title,
      image: post.image,
      link: post.link,
      id: post.id,
    });
  }

  let badge = <div></div>;
  if (post.tags.includes('sailpoint-developed')) {
    badge = (
      <div className={styles.cardBadge}>
        <img
          className={styles.cardBadgeImage}
          src={useBaseUrl('/icons/SailPoint-LogoIcon-RGB-Color.svg')}></img>
        <span className={styles.cardBadgeText}>SailPoint Developed</span>
      </div>
    );
  } else if (post.tags.includes('sailpoint-certified')) {
    badge = (
      <div className={styles.cardBadgeCertified}>
        <img
          className={styles.cardBadgeCertifiedImage}
          src={useBaseUrl('/marketplace/award-simple-sharp-solid.svg')}></img>
        <span>SailPoint Certified</span>
      </div>
    );
  }

  return (
    <div onClick={(e) => setFilters(e)}>
      <div className={styles.card}>
        <div className={styles.cardText}>
          <img className={styles.cardImage} src={useBaseUrl(post.image)}></img>
          <div className={styles.cardTitle}>{post.title}</div>
          {/* <div className={styles.tags}>
            {post.tags?.map((tag, index) => {
              if (
                index > 2 ||
                tag == 'sailpoint-certified' ||
                tag == 'sailpoint-authored'
              ) {
                return '';
              }
              return (
                <div key={tag} className={styles.tag}>
                  {tag}
                </div>
              );
            })}
          </div> */}
          <div className={styles.cardBody}>{post.excerpt}</div>
        </div>

        {badge}
      </div>
    </div>
  );
}
