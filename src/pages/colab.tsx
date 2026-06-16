import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';
import MarketplaceBanner from '../components/marketplace/MarketplaceBanner';
import styles from './exchange.module.css';
 
const Marketplace: React.FC = () => {
  return (
    <Layout title="CoLab" description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <MarketplaceBanner />
        <div>
          <div className={styles.mainCard}>
            <div className={styles.contentContainer}>
              <div className={styles.gettingStartedText}>
                <div className={styles.gettingStartedOne}>Welcome to CoLab</div>
                <div className={styles.gettingStartedTwo}>
                  <span>
                  Here you can find ready-to-use Workflows, SaaS Connectors, Rules, Transforms, IIQ Plugins, and more — built and maintained by your fellow peers in the community.
                  </span></div>
                <div className={styles.gettingStartedThree}>
                  <Link to={'/colab/colabitems'} className={styles.link}>
                    Browse CoLab Solutions &#8594;
                  </Link>
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
        <section className={styles.categoriesSection}>
          <h2 className={styles.categoriesHeader}>What can you find in CoLab?</h2>
          <div className={styles.categoriesGrid}>
            <Link to="/colab/colabitems?category=saas-connectors" className={styles.categoryLink}>
              <article className={styles.categoryCard}>
                <h3 className={styles.categoryTitle}>SaaS Connectors</h3>
                <p className={styles.categoryDescription}>Pre-built connectors for SaaS platforms</p>
              </article>
            </Link>
            <Link to="/colab/colabitems?category=workflows" className={styles.categoryLink}>
              <article className={styles.categoryCard}>
                <h3 className={styles.categoryTitle}>Workflows</h3>
                <p className={styles.categoryDescription}>Automated identity lifecycle workflows</p>
              </article>
            </Link>
            <Link to="/colab/colabitems?category=rules" className={styles.categoryLink}>
              <article className={styles.categoryCard}>
                <h3 className={styles.categoryTitle}>Rules</h3>
                <p className={styles.categoryDescription}>Custom logic and business rules</p>
              </article>
            </Link>
            <Link to="/colab/colabitems?category=transforms" className={styles.categoryLink}>
              <article className={styles.categoryCard}>
                <h3 className={styles.categoryTitle}>Transforms</h3>
                <p className={styles.categoryDescription}>Data transformation utilities</p>
              </article>
            </Link>
            <Link to="/colab/colabitems?category=iiq-plugins" className={styles.categoryLink}>
              <article className={styles.categoryCard}>
                <h3 className={styles.categoryTitle}>IIQ Plugins</h3>
                <p className={styles.categoryDescription}>IdentityIQ platform extensions</p>
              </article>
            </Link>
            <Link to="/colab/colabitems?category=community-tools" className={styles.categoryLink}>
              <article className={styles.categoryCard}>
                <h3 className={styles.categoryTitle}>Community Tools</h3>
                <p className={styles.categoryDescription}>
                  Developer utilities and community helpers
                </p>
              </article>
            </Link>
          </div>
        </section>
        <section className={styles.faqSection}>
          <div className={styles.faqColumn}>
            <h2 className={styles.faqHeader}>Frequently Asked Questions</h2>
            <p className={styles.faqSubheader}>Everything you need to know about CoLab.</p>

            <details className={styles.qaBox} open>
              <summary className={styles.questionTitle}>What is CoLab?</summary>
              <div className={styles.answerContent}>
                <p className={styles.answerText}>
                  CoLab is a place where the SailPoint technical community can build, share, and
                  enhance fully-featured solutions that use, or integrate with, SailPoint platforms.
                  On CoLab you can work together to solve both common and complex problems in
                  identity.
                </p>
                <p className={styles.answerText}>
                  Everything in CoLab is completely open-source and MIT licensed and not supported
                  by SailPoint support plans or SLAs.
                </p>
              </div>
            </details>

            <details className={styles.qaBox}>
              <summary className={styles.questionTitle}>Who runs CoLab?</summary>
              <div className={styles.answerContent}>
                <p className={styles.answerText}>
                  CoLab is run in the SailPoint Developer Community in partnership with
                  SailPoint&apos;s Developer Relations team.
                </p>
              </div>
            </details>

            <details className={styles.qaBox}>
              <summary className={styles.questionTitle}>What can I find on CoLab?</summary>
              <div className={styles.answerContent}>
                <p className={styles.answerText}>
                  You can find Workflows, SaaS Connectors, Rules, Transforms, IIQ Plugins, 
                  and Tools. <Link to={'/colab/colabitems'} className={styles.link}>Explore</Link> 
                  the different categories to find the solution that best fits your needs.
                </p>
              </div>
            </details>

            <details className={styles.qaBox}>
              <summary className={styles.questionTitle}>
                How do I get support for something I downloaded from CoLab?
              </summary>
              <div className={styles.answerContent}>
                <p className={styles.answerText}>
                  All items in CoLab are community-developed and community-driven. We have two
                  support models:
                </p>
                <table className={styles.supportTable}>
                  <thead>
                    <tr>
                      <th>Support Model</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>sailpoint-certified</td>
                      <td>
                        Available to SailPoint Technology Alliance program members. Result of a
                        co-development process with additional validation. Supported by the listed
                        partner.
                      </td>
                    </tr>
                    <tr>
                      <td>community-developed</td>
                      <td>
                        Supported by the community. Items tagged &ldquo;unsupported&rdquo; have no
                        active maintainer - contributions are welcome.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </details>

            <details className={styles.qaBox}>
              <summary className={styles.questionTitle}>
                What are the technical requirements for CoLab items?
              </summary>
              <div className={styles.answerContent}>
                <ul className={styles.answerChecklist}>
                  <li>
                    All CoLab items are required to be open-source and MIT licensed.
                  </li>
                  <li>
                    All code will be stored in the sailpoint-oss GitHub workspace. You will be
                    made a GitHub Codeowner of your item.
                  </li>
                  <li>
                    All submitters must agree to SailPoint&apos;s Contributor License Agreement -
                    this happens automatically during submission.
                  </li>
                  <li>
                    Inactive or unsupported submissions may be removed or reassigned to new
                    community maintainers.
                  </li>
                </ul>
              </div>
            </details>

            <details className={styles.qaBox}>
              <summary className={styles.questionTitle}>How do I become a publisher on CoLab?</summary>
              <div className={styles.answerContent}>
                <p className={styles.answerText}>
                  Use the +Request button on the CoLab Publishers group page with a link to the items you'd like to publish.
                  <a
                className={styles.publisherLink}
                href="https://developer.sailpoint.com/discuss/g/colab_authors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start publishing &#8594;
              </a>
                </p>
              </div>
            </details>

            <details className={styles.qaBox}>
              <summary className={styles.questionTitle}>How can I collaborate on an existing CoLab item?</summary>
              <div className={styles.answerContent}>
                <p className={styles.answerText}>
                All CoLab items are open-source on GitHub. Fork the repository, open issues, or submit pull requests on the sailpoint-oss GitHub workspace.
                <a
                className={styles.publisherLink}
                href="https://github.com/sailpoint-oss"
                target="_blank"
                rel="noopener noreferrer"
              >
                Collaborate on CoLab Solutions &#8594;
              </a>
                </p>
              </div>
            </details>

          </div>

          <aside className={styles.publisherColumn}>
            <div className={styles.publisherFrame}>
              <h3 className={styles.publisherHeader}>Become a Publisher</h3>
              <p className={styles.publisherText}>
                Share your solutions with the community. Use the +Request button on the CoLab
                Publishers group page to get started.
              </p>
              <a
                className={styles.publisherLink}
                href="https://developer.sailpoint.com/discuss/g/colab_authors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start publishing &#8594;
              </a>
            </div>
            <div className={styles.publisherFrame}>
              <h3 className={styles.publisherHeader}>Getting Started Guides</h3>
              <p className={styles.publisherText}>
                Step-by-step guides for each CoLab category.
              </p>
              <div className={styles.guidesList}>
                <Link to="/colab/colabitems?category=saas-connectors" className={styles.publisherGuideLink}>
                  Getting started with SaaS Connectors
                </Link>
                <Link to="/colab/colabitems?category=workflows" className={styles.publisherGuideLink}>
                  Getting started with Workflows
                </Link>
                <Link to="/colab/colabitems?category=rules" className={styles.publisherGuideLink}>
                  Getting started with Rules
                </Link>
                <Link to="/colab/colabitems?category=transforms" className={styles.publisherGuideLink}>
                  Getting started with Transforms
                </Link>
                <Link to="/colab/colabitems?category=iiq-plugins" className={styles.publisherGuideLink}>
                  Getting started with IIQ Plugins
                </Link>
                <Link to="/colab/colabitems?category=community-tools" className={styles.publisherGuideLink}>
                  Getting started with Community Tools
                </Link>
              </div>
              <Link to="/docs/colab/colab-documentation" className={styles.publisherLink}>
                view all guides &#8594;
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </Layout>
  );
};

export default Marketplace;
