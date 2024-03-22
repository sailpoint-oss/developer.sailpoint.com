import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShieldCheck, faAward} from '@fortawesome/pro-solid-svg-icons';

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
      <div className={styles.badgeContainer}>
        <div className={styles.certifiedText}>
          <span className={styles.badgeText}>SailPoint Certified</span>
        </div>

        <div className={styles.cardBadgeCertified}>
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
    <div onClick={(e) => setFilters(e)}>
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
    </div>
  );
}
