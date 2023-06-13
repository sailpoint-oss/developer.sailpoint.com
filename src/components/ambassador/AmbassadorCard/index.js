import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import {addDarkToFileName} from '../../../util/util';
export default function AmbassadorCard({
  data
}) {

  console.log(data)
  return (
    <Link to={data.link}>
      <div className={styles.card} >
        <div className={styles.cardUser}>
          <img className={styles.cardFace} src={useBaseUrl(data.creatorImage)}></img>
          <div className={styles.cardName}>{data.name}</div>
        </div>


        <div className={styles.cardText}>
          <div className={styles.cardBody}>{data.title}</div>
        </div>
        



      </div>
    </Link>
  );
}
