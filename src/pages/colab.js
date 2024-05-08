import React from 'react';
import Layout from '@theme/Layout';
import MarketplaceBanner from '../components/marketplace/MarketplaceBanner';
import Link from '@docusaurus/Link';
import styles from './exchange.module.css';
import MarketplaceCards from '../components/marketplace/MarketplaceCards';
import HomepageCard from '../components/homepage/HomepageCard';

export default function Marketplace() {
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

  const [communityTools] = React.useState({
    category: 'colab-community-tools',
    tags: [],
  });

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <MarketplaceBanner />
        <div>
          <div className={styles.mainCard}>
            <div className={styles.contentContainer}>
              <div className={styles.gettingStartedText}>
                <div className={styles.gettingStartedOne}>
                  CoLab Marketplace
                </div>
                <div className={styles.gettingStartedTwo}>
                  What is the CoLab?
                </div>
                <div className={styles.gettingStartedThree}>
                  <span>
                    The community CoLab is a place where members of our
                    community can build fully-featured solutions on our platform
                    and share those solutions with each other. Users collaborate
                    on these solutions to benefit both themselves and the
                    community at large.
                  </span>{' '}
                  <br />
                  <br />
                  <a href="https://developer.sailpoint.com/discuss/t/developer-community-colab-getting-started-guide/11230">
                    Get started with the CoLab &#8594;
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.carousel}>
              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/k52spcpVHzs?si=bEJPp6bv_3jOjCqw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div>
            <div className={styles.cardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Workflows</h1>
                <Link to={'/colab/workflows'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards
                filterCallback={workflows}
                limit={5}
                multiple={true}
              />
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>SaaS Connectors</h1>
                <Link to={'/colab/saasconnectors'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards
                filterCallback={saas}
                limit={5}
                multiple={true}
              />
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Community Tools</h1>
                <Link to={'/colab/communitytools'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards
                filterCallback={communityTools}
                limit={5}
                multiple={true}
              />
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Rules</h1>
                <Link to={'/colab/rules'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards
                filterCallback={rules}
                limit={5}
                multiple={true}
              />
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Transforms</h1>
                <Link to={'/colab/transforms'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards
                filterCallback={transforms}
                limit={5}
                multiple={true}
              />
            </div>

            <div className={styles.cardContainer}>
              <div>
                <h1 className={styles.title}>IIQ Plugins</h1>
                <Link to={'/colab/plugins'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards
                filterCallback={plugins}
                limit={5}
                multiple={true}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
