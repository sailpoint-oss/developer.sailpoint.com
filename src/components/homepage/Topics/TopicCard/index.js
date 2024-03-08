import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function TopicCard({discourseURL, title, body, tags}) {

  return (
    <Link to={discourseURL}>
      <div className={styles.card}>
        <div className={styles.cardText}>
          <div className={styles.cardTitle}>{title}</div>
          <div className={styles.tags}>
            {tags?.map((tag, index) => {
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