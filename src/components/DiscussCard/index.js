import React from "react";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
export default function DiscussCard({link, title, tags, views, liked, solution}) {

  let solved = <img className={styles.cardDiscuss} src="/homepage/edit.png"></img>
  let linkText = <div className={styles.linkText}>Join the Discussion</div>
  if (solution) {
    solved = <img className={styles.cardSolved} src="/homepage/solved.png"></img>
    linkText = <div className={styles.linkSolvedText}>View the Solution</div>
  }
  return (
    <Link to={link}>
      <div className={styles.card}>
        <img className={styles.cardIcon} src="/homepage/quotes.png"></img>
        <img className={styles.cardArrow} src="/homepage/arrow-right.png"></img>
        <img className={styles.cardEye} src="/homepage/eyeball.png"></img>
        <img className={styles.cardLiked} src="/homepage/liked.png"></img>
        {solved}
        <div className={styles.cardText}>{title}</div>
        <div className={styles.cardViews}>{views}</div>
        <div className={styles.cardLikes}>{liked}</div>
        {linkText}

        {tags?.map(tag => {
          return (
            <div className={styles.product}>{tag}</div>
          )
        })}
      </div>
    </Link>
  );
}
