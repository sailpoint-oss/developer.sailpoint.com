import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Define props interface
interface BlogCardProps {
  featured?: boolean;
  link: string;
  title: string;
  tags?: string[];
  creatorImage: string;
  creatorTitle: string;
  image: string;
  excerpt?: string;
  name: string;
  views?: number;
  replies?: number;
  readTime?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  featured = false,
  link,
  title,
  creatorImage,
  creatorTitle,
  image,
  name,
}) => {
  return (
    <Link to={link}>
      <div className={featured ? styles.featuredCard : styles.card}>
        <div className={styles.cardText}>
          <img
            className={featured ? styles.featuredCardImage : styles.cardImage}
            src={useBaseUrl(image)}
            alt={title}
          />
          <div className={styles.split}></div>

          <div className={featured ? styles.featuredCardTitle : styles.cardTitle}>
            {title}
          </div>

          <div className={styles.cardUser}>
            <img
              className={featured ? styles.featuredCardFace : styles.cardFace}
              src={useBaseUrl(creatorImage)}
              alt={name}
            />

            <div className={styles.cardName}>{name}</div>
            <div className={styles.cardCreatorTitle}>{creatorTitle}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
