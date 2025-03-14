import React, { useState } from 'react';
import Layout from '@theme/Layout';
import BlogBanner from '../components/blog/BlogBanner';
import styles from './blog.module.css';
import BlogCards from '../components/blog/BlogCards';
import BlogSidebar from '../components/blog/BlogSidebar';

const Blog: React.FC = () => {
  const [filteredProduct, setFilteredProduct] = useState<string[]>(['identity-security-cloud']);

  const handleClick = (data: string) => {
    setFilteredProduct((prevFilter) => {
      const updatedFilter = [...prevFilter];
      const index = updatedFilter.indexOf(data);

      if (index !== -1) {
        updatedFilter.splice(index, 1);
      } else {
        updatedFilter.push(data);
      }

      return updatedFilter;
    });
  };

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main className={styles.main}>
        <BlogBanner />
        <div>
          <div className={styles.mainCard}>
            <div className={styles.contentContainer}>
              <div className={styles.gettingStartedText}>
                <div className={styles.gettingStartedOne}>Community Blog</div>
                <div className={styles.gettingStartedThree}>
                  <span>
                    Our community blog is a collection of technical writings
                    provided by members of our community—your peers—discussing
                    detailed walkthroughs, challenges faced (and how they were
                    overcome), and thoughts on managing identity in a meaningful
                    way.
                  </span>
                  <br />
                  <br />
                  <a href="https://developer.sailpoint.com/discuss/t/guide-for-writing-blog-posts/10277">
                    Become an author &#8594;
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.featuredBlogContainer} title="Featured Blog">
              <div className={styles.featuredGettingStartedText}>
                <div className={styles.gettingStartedOne}>Featured</div>
              </div>
              <BlogCards
                filterCallback={filteredProduct}
                limit={1}
                featured={true}
              />
            </div>
          </div>
        </div>
        <div className={styles.blogContainer}>
          <div className={styles.blogSidbarContainer}>
            <BlogSidebar filterCallback={handleClick} />
          </div>
          <div className={styles.blogCardContainer}>
            <BlogCards filterCallback={filteredProduct} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Blog;
