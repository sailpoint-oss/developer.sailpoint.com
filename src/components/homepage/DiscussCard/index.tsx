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
  tags?: string[];
  views: number;
  liked: number;
  solution?: boolean;
}

const DiscussCard: React.FC<DiscussCardProps> = ({ link, title, tags, views, liked, solution }) => {
  let solved = (
    <img className={styles.cardDiscuss} src={useBaseUrl('/homepage/edit.png')} alt="Discussion" />
  );
  let linkText = <div className={styles.linkText}>Join the Discussion</div>;

  if (solution) {
    solved = <FontAwesomeIcon icon={faSquareCheck} className={styles.cardSolved} size="lg" />;
    linkText = <div className={styles.linkSolvedText}>View the Solution</div>;
  }

  return (
    <Link to={link}>
      <div className={styles.card}>
        <ThemedImage
          className={styles.cardIcon}
          sources={{
            light: useBaseUrl('/homepage/quotes.png'),
            dark: useBaseUrl(addDarkToFileName('/homepage/quotes.png')),
          }}
        />
        <ThemedImage
          className={styles.cardArrow}
          sources={{
            light: useBaseUrl('/homepage/arrow-right.png'),
            dark: useBaseUrl('/homepage/arrow-right-dark.png'),
          }}
        />
        <FontAwesomeIcon icon={faEye} className={styles.cardEye} size="lg" />
        <img className={styles.cardLiked} src={useBaseUrl('/homepage/liked.png')} alt="Liked" />
        {solved}
        <div className={styles.cardText}>{title}</div>
        <div className={styles.cardViews}>{views}</div>
        <div className={styles.cardLikes}>{liked}</div>
        {linkText}

        <div className={styles.tags}>
          {tags?.slice(0, 3).map((tag) => (
            <div key={tag} className={styles.tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default DiscussCard;
