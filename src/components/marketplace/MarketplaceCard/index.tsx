import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import Link from '@docusaurus/Link';

// Define the props interface
interface MarketplaceCardProps {
  post: {
    link: string;
    title: string;
    image: string;
    creatorImage: string;
    creatorName: string;
    creatorTitle: string;
    tags: (string | { id: number; name: string; slug: string })[];
  };
  featured?: boolean;
}

const MarketplaceCard: React.FC<MarketplaceCardProps> = ({ post, featured }) => {
  let badge: JSX.Element = <div></div>;

  // Helper to check if a tag matches (handles both string and object tags)
  const hasTag = (tagName: string) => 
    post.tags.some(tag => 
      typeof tag === 'string' ? tag === tagName : tag.name === tagName
    );

  if (hasTag('sailpoint-developed')) {
    badge = (
      <div className={styles.cardBadge}>
        <img
          className={styles.cardBadgeImage}
          src={useBaseUrl('/icons/SailPoint-LogoIcon-RGB-Color.svg')}
          alt="SailPoint Developed"
        />
        <span className={styles.cardBadgeText}>SailPoint Developed</span>
      </div>
    );
  } else if (hasTag('sailpoint-certified')) {
    badge = (
      <div className={styles.badgeContainer}>
        <div title="SailPoint Certified" className={styles.cardBadgeCertified}>
          <FontAwesomeIcon style={{fontSize: '2em'}} icon={faShield} className={styles.docCardIcon} size="2x" />
        </div>
      </div>
    );
  }

  return (
    <Link to={post.link}>
      <div className={featured ? styles.featuredCard : styles.card}>
        <div className={styles.cardText}>
          <img
            className={featured ? styles.featuredCardImage : styles.cardImage}
            src={useBaseUrl(post.image)}
            alt={post.title}
          />
          <div className={styles.split}></div>
          <div className={featured ? styles.featuredCardTitle : styles.cardTitle}>{post.title}</div>

          <div className={styles.cardUser}>
            <img
              className={featured ? styles.featuredCardFace : styles.cardFace}
              src={useBaseUrl(post.creatorImage)}
              alt={post.creatorName}
            />

            <div className={styles.cardName}>{post.creatorName}</div>
            <div className={styles.cardCreatorTitle}>{post.creatorTitle}</div>
          </div>
        </div>

        {badge}
      </div>
    </Link>
  );
};

export default MarketplaceCard;
