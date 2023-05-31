import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import {addDarkToFileName} from '../../../util/util';
export default function MarketplaceCardDetail({
  details
}) {


  return (
    <div onClick={(e) => setFilters(e)}>
      <div>{details}</div>
    </div>
  );
}
