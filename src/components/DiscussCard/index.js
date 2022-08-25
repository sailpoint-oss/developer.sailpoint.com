import React from "react";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
export default function DiscussCard({link, title, tags, views}) {


  return (
    <Link to={link}>
      <div className={styles.card}>
        <img className={styles.cardIcon} src="/homepage/quotes.PNG"></img>
        <img className={styles.cardArrow} src="/homepage/arrow-right.png"></img>
        <img className={styles.cardEye} src="/homepage/eyeball.PNG"></img>
        <div className={styles.cardText}>{title}</div>
        <div className={styles.cardViews}>{views}</div>

        {tags?.map(tag => {
          return (
            <div className={styles.product}>{tag}</div>
          )
        })}
      </div>
    </Link>
  );
}
