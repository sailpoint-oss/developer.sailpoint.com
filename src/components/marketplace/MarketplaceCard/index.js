import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShieldCheck, faAward} from '@fortawesome/pro-solid-svg-icons';
import Link from '@docusaurus/Link';

export default function MarketplaceCard({post}) {
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
      <div className={styles.badgeContainer}>
        <div title="SailPoint Certified" className={styles.cardBadgeCertified}>
          <FontAwesomeIcon
            icon={faShieldCheck}
            className={styles.docCardIcon}
            size="2x"
          />
        </div>
      </div>
    );
  }

  return (
    <Link to={post.link}>
      {/* <div onClick={(e) => setFilters(e)}> */}
      <div className={styles.card}>
        <div className={styles.cardText}>
          <img className={styles.cardImage} src={useBaseUrl(post.image)}></img>
          <div className={styles.split}></div>
          <div className={styles.cardTitle}>{post.title}</div>

          <div className={styles.cardUser}>
            <img
              className={styles.cardFace}
              src={useBaseUrl(post.creatorImage)}></img>

            <div className={styles.cardName}>{post.creatorName}</div>
            <div className={styles.cardCreatorTitle}>{post.creatorTitle}</div>

            <div></div>
          </div>
        </div>

        {badge}
      </div>
      {/* </div> */}
    </Link>
  );
}
