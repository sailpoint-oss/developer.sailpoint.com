import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React, { useState } from 'react';
import MarketplaceBanner from '../components/marketplace/MarketplaceBanner';
import MarketplaceCards from '../components/marketplace/MarketplaceCards';
import styles from './exchange.module.css';

interface FilterConfig {
  category: string;
  tags: string[];
}

const Marketplace: React.FC = () => {
  const [plugins] = useState<FilterConfig>({
    category: 'colab-iiq-plugins',
    tags: [],
  });

  const [rules] = useState<FilterConfig>({
    category: 'colab-rules',
    tags: ['identity-security-cloud'],
  });

  const [saas] = useState<FilterConfig>({
    category: 'colab-saas-connectors',
    tags: [],
  });

  const [saasConnectorCustomizers] = useState<FilterConfig>({
    category: 'saas-connector-customizers',
    tags: [],
  });

  const [transforms] = useState<FilterConfig>({
    category: 'colab-transforms',
    tags: [],
  });

  const [workflows] = useState<FilterConfig>({
    category: 'colab',
    tags: ['workflows'],
  });

  const [communityTools] = useState<FilterConfig>({
    category: 'colab-community-tools',
    tags: [],
  });

  return (
    <Layout title="CoLab" description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <MarketplaceBanner />
        <div>
          <div className={styles.mainCard}>
            <div className={styles.contentContainer}>
              <div className={styles.gettingStartedText}>
                <div className={styles.gettingStartedOne}>CoLab marketplace</div>
                <div className={styles.gettingStartedTwo}>What is the CoLab?</div>
                <div className={styles.gettingStartedThree}>
                  <span>
                    The community CoLab is a place where members of our
                    community can build fully-featured solutions on our platform
                    and share those solutions with each other. Users collaborate
                    on these solutions to benefit both themselves and the
                    community at large.
                  </span>
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
                src="https://www.youtube.com/embed/J-Z1b654Vtk?si=YKK-tvGxL5N1WjNi"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
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
              <MarketplaceCards filterCallback={workflows} limit={5} multiple={true} />
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>SaaS Connectors</h1>
                <Link to={'/colab/saasconnectors'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={saas} limit={5} multiple={true} />
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>SaaS Connector Customizers</h1>
                <Link to={'/colab/saasconnectorcustomizers'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={saasConnectorCustomizers} limit={5} multiple={true} />
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Community Tools</h1>
                <Link to={'/colab/communitytools'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={communityTools} limit={5} multiple={true} />
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Rules</h1>
                <Link to={'/colab/rules'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={rules} limit={5} multiple={true} />
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Transforms</h1>
                <Link to={'/colab/transforms'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={transforms} limit={5} multiple={true} />
            </div>

            <div className={styles.cardContainer}>
              <div>
                <h1 className={styles.title}>IIQ Plugins</h1>
                <Link to={'/colab/plugins'} className={styles.link}>
                  View All &#8594;
                </Link>
              </div>
              <MarketplaceCards filterCallback={plugins} limit={5} multiple={true} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Marketplace;
