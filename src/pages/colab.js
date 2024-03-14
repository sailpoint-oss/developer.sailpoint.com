import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MarketplaceBanner from '../components/marketplace/MarketplaceBanner';
import Link from '@docusaurus/Link';
import styles from './exchange.module.css';
import MarketplaceCards from '../components/marketplace/MarketplaceCards';

export default function Marketplace() {
  const [communityTools] = React.useState({
    category: 'colab-community-tools',
    tags: [],
  });

  const [plugins] = React.useState({
    category: 'colab-iiq-plugins',
    tags: [],
  });

  const [rules] = React.useState({
    category: 'colab-rules',
    tags: ['identity-security-cloud'],
  });

  const [saas] = React.useState({
    category: 'colab-saas-connectors',
    tags: [],
  });

  const [transforms] = React.useState({
    category: 'colab-transforms',
    tags: [],
  });

  const [workflows] = React.useState({
    category: 'colab',
    tags: ['workflows'],
  });

  const {siteConfig} = useDocusaurusContext();

  // const handleClick = (data) => {
  //   var tempFilter = filteredProduct.tags.slice();

  //   if (data.tag) {
  //     const index = tempFilter.indexOf(data.tag);
  //     if (index !== -1) {
  //       tempFilter.splice(index, 1);
  //     } else {
  //       tempFilter.push(data.tag);
  //     }
  //   }

  //   console.log('tempFilter', tempFilter);
  //   console.log('data.category', data.category);
  //   if (data.category) {
  //     setFilteredProduct({category: data.category, tags: tempFilter});
  //   } else {
  //     setFilteredProduct({
  //       category: filteredProduct.category,
  //       tags: tempFilter,
  //     });
  //   }
  // };
  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <MarketplaceBanner />
        <div className={styles.blogContainer}>
          {/* <div className={styles.blogSidbarContainer}>
            <MarketplaceSidebar
              selectedCategory={filteredProduct.category}
              filterCallback={handleClick}
            />
          </div> */}
          <div>
            <div className={styles.blogCardContainer}>
              <div>
                <h1 className={styles.title}>Plugins</h1>
                <Link to={'/colab/plugins'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={plugins} limit={4} />
            </div>
      
            <div className={styles.blogCardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Community Tools</h1>
                <Link to={'/colab/communitytools'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={communityTools} limit={4} />
            </div>

            <div className={styles.blogCardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Workflows</h1>
                <Link to={'/colab/workflows'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={workflows} limit={4} />
            </div>
            <div className={styles.blogCardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>SaaS Connectors</h1>
                <Link to={'/colab/saasconnectors'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={saas} limit={4} />
            </div>
            <div className={styles.blogCardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Rules</h1>
                <Link to={'/colab/rules'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={rules} limit={4} />
            </div>
            <div className={styles.blogCardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Transforms</h1>
                <Link to={'/colab/transforms'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={transforms} limit={4} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
