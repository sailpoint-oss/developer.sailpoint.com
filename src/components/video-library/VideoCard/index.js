import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function VideoCard({videoURL, thubnail, title, body, tags}) {
  React.useEffect(() => {
    console.log(videoURL);
  }, []);

  return (
    <Link to={videoURL}>
      <div className={styles.card}>
        <div className={styles.cardText}>
          <img className={styles.cardImage} src={thubnail}></img>
          <div className={styles.cardTitle}>{title}</div>
          <div className={styles.tags}>
            {tags?.map((tag, index) => {
              // if (index > 2 || tag == 'sailpoint-certified' || tag == 'sailpoint-authored') {
              //   return '';
              // }
              return (
                <div key={tag} className={styles.tag}>
                  {tag}
                </div>
              );
            })}
          </div>
          <div className={styles.cardBody}>
            {body.length > 100 ? body.substring(0, 97) + '...' : body}
          </div>
        </div>
      </div>
    </Link>
  );
}
