import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AmbassadorBanner from '../components/ambassador/AmbassadorBanner';

import styles from './ambassador.module.css';
import AmbassadorCards from '../components/ambassador/AmbassadorCards';

export default function Ambassador() {
  const [filteredProduct, setFilteredProduct] = React.useState([]);

  const {siteConfig} = useDocusaurusContext();

  const handleClick = (data) => {
    var tempFilter = filteredProduct.slice()

    const index = tempFilter.indexOf(data);
    if (index !== -1) {
      tempFilter.splice(index, 1);
    } else {
      tempFilter.push(data)
    }

    setFilteredProduct(tempFilter)
  };
  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
      <AmbassadorBanner />
      <div className={styles.ambassadorContainer}>
          <div className={styles.ambassadorCardContainer}><AmbassadorCards filterCallback={filteredProduct}/></div>
      </div>
      
      </main>
    </Layout>
  );
}
