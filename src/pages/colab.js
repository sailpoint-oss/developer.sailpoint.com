import React from 'react';
import Layout from '@theme/Layout';
import MarketplaceBanner from '../components/marketplace/MarketplaceBanner';
import Link from '@docusaurus/Link';
import styles from './exchange.module.css';
import MarketplaceCards from '../components/marketplace/MarketplaceCards';

export default function Marketplace() {
  const [communityTools] = React.useState({
    category: 'colab-community-tools',
    tags: ['identity-security-cloud'],
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

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <MarketplaceBanner />
        <div className={styles.container}>
          <div>
            <div className={styles.cardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Workflows</h1>
                <Link to={'/colab/workflows'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={workflows} limit={5} />
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>SaaS Connectors</h1>
                <Link to={'/colab/saasconnectors'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={saas} limit={5} />
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Community Tools</h1>
                <Link to={'/colab/communitytools'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={communityTools} limit={5} />
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Rules</h1>
                <Link to={'/colab/rules'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={rules} limit={5} />
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Transforms</h1>
                <Link to={'/colab/transforms'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={transforms} limit={5} />
            </div>

            <div className={styles.cardContainer}>
              <div>
                <h1 className={styles.title}>IIQ Plugins</h1>
                <Link to={'/colab/plugins'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={plugins} limit={5} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
