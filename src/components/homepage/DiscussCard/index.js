import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import {addDarkToFileName} from '../../../util/util';
export default function DiscussCard({
  link,
  title,
  tags,
  views,
  liked,
  solution,
}) {
  let solved = (
    <img
      className={styles.cardDiscuss}
      src={useBaseUrl('/homepage/edit.png')}></img>
  );
  let linkText = <div className={styles.linkText}>Join the Discussion</div>;
  if (solution) {
    solved = (
      <ThemedImage
        className={styles.cardSolved}
        sources={{
          light: useBaseUrl('/homepage/solved.png'),
          dark: useBaseUrl(addDarkToFileName('/homepage/solved.png')),
        }}></ThemedImage>
    );
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
          }}></ThemedImage>
        <ThemedImage
          className={styles.cardArrow}
          sources={{
            light: useBaseUrl('/homepage/arrow-right.png'),
            dark: useBaseUrl('/homepage/arrow-right-dark.png'),
          }}></ThemedImage>
        <ThemedImage
          className={styles.cardEye}
          sources={{
            light: useBaseUrl('/homepage/eyeball.png'),
            dark: useBaseUrl(addDarkToFileName('/homepage/eyeball.png')),
          }}></ThemedImage>
        <img
          className={styles.cardLiked}
          src={useBaseUrl('/homepage/liked.png')}></img>
        {solved}
        <div className={styles.cardText}>{title}</div>
        <div className={styles.cardViews}>{views}</div>
        <div className={styles.cardLikes}>{liked}</div>
        {linkText}

        <div className={styles.tags}>
          {tags?.map((tag, index) => {
            if (index > 2) {
              return '';
            }
            return <div className={styles.tag}>{tag}</div>;
          })}
        </div>
      </div>
    </Link>
  );
}
