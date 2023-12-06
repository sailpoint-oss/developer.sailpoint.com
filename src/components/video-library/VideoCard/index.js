import React from 'react';
import styles from './styles.module.css';


export default function VideoCard({
    videoURL,
    thubnail,
    title,
    body,
  }) {

  
  return (
    <div onClick={(e) => setFilters(e)}>
      <div className={styles.card} >
        <div className={styles.cardText}>
          <img className={styles.cardImage} src={thubnail}></img>
          <div className={styles.cardTitle}>{title}</div>
          <div className={styles.cardBody}>{body}</div>
        </div>
      </div>
    </div>
  );
}
