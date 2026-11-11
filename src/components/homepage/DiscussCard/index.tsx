import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import { addDarkToFileName } from '../../../util/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faEye } from '@fortawesome/free-solid-svg-icons';

interface DiscussCardProps {
  link: string;
  title: string;
  tags?: (string | { id: number; name: string; slug: string })[];
  views: number;
  liked: number;
  solution?: boolean;
}

const DiscussCard: React.FC<DiscussCardProps> = ({ link, title, tags, views, liked, solution }) => {
  return (
    <Link to={link}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <ThemedImage
            className={styles.cardIcon}
            sources={{
              light: useBaseUrl('/homepage/quotes.png'),
              dark: useBaseUrl(addDarkToFileName('/homepage/quotes.png')),
            }}
          />
          <div className={styles.cardStats}>
            {solution && (
              <FontAwesomeIcon icon={faSquareCheck} className={styles.cardSolved} size="lg" />
            )}
            <span className={styles.cardStat}>
              <img className={styles.cardLiked} src={useBaseUrl('/homepage/liked.png')} alt="Liked" />
              {liked}
            </span>
            <span className={styles.cardStat}>
              <FontAwesomeIcon icon={faEye} className={styles.cardEye} />
              {views}
            </span>
          </div>
        </div>

        <div className={styles.cardText}>{title}</div>

        <div className={styles.tags}>
          {tags?.slice(0, 3).map((tag) => (
            <div key={typeof tag === 'object' ? tag.name : tag} className={styles.tag}>
              {typeof tag === 'object' ? tag.name : tag}
            </div>
          ))}
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.linkText}>
            {solution ? 'View the Solution' : 'Join the Discussion'}
          </div>
          <ThemedImage
            className={styles.cardArrow}
            sources={{
              light: useBaseUrl('/homepage/arrow-right.png'),
              dark: useBaseUrl('/homepage/arrow-right-dark.png'),
            }}
          />
        </div>
      </div>
    </Link>
  );
};

export default DiscussCard;
