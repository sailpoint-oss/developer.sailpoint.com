import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './filter.module.css';

import BlogSidebar from '../../components/blog/BlogSidebar';
import MarketplaceCards from '../../components/marketplace/MarketplaceCards';

export default function Workflows() {
  const [filteredProduct, setFilteredProduct] = React.useState({
    category: 'colab-iiq-plugins',
    tags: ['Identityiq'],
  });

  const {siteConfig} = useDocusaurusContext();

  const handleClick = (data) => {
    var tempFilter = [];

    const index = tempFilter.indexOf(data);
    if (index !== -1) {
      tempFilter.splice(index, 1);
    } else {
      tempFilter.push(data);
    }
    console.log(tempFilter);

    setFilteredProduct({
      category: 'colab-iiq-plugins',
      tags: tempFilter,
    });
  };
  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div>
          <div className={styles.filterContainer}>
            <BlogSidebar filterCallback={handleClick} isChecked={true} defaultValue={'Identityiq'}/>
          </div>
          <div className={styles.blogCardContainer}>
            <MarketplaceCards filterCallback={filteredProduct}/>
          </div>
        </div>
      </main>
    </Layout>
  );
}
