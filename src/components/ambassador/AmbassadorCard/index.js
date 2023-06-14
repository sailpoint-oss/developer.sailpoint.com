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


      <div className={styles.card}>
        <div className={styles.cardFaceContainer}>
          <img className={styles.cardFace} src={useBaseUrl(data.creatorImage)}></img>
        </div>
        <div className={styles.cardText}>{data.name}</div>
        <div className={styles.titleText}>{data.title}</div>
        <div className={styles.expertiseText}>Ambassador</div>
      </div>

    </Link>
  );
}
