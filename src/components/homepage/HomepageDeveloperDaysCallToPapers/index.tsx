import React from 'react';
import styles from './styles.module.css';

const HomepageGettingStarted: React.FC = () => {
  return (
    <div>
      <div className={styles.mainCard}>
        <div className={styles.contentContainer}>
          <div className={styles.gettingStartedText}>
            <div className={styles.gettingStartedOne}>
              📢 SailPoint Developer Days Call To Papers 📢
            </div>
            <div className={styles.gettingStartedTwo}>Submit by: February 24, 2025</div>
            <div className={styles.gettingStartedThree}>
              Want to present at SailPoint Developer Days?<br />
              We're looking for hands-on sessions showcasing SailPoint APIs, workflows, and more!
            </div>
          </div>

          <div>
            <a
              href="https://airtable.com/appbFjvMXeSkjL4VE/pagCHfhhzJEBq3xQ3/form"
              className={styles.registerButtonPink}>
              Apply now!
            </a>
            <p className="extra-link">
              <a href="https://developer.sailpoint.com/discuss/t/announcing-sailpoints-developer-days-2025/99813" target="_blank" rel="noopener noreferrer">
                Learn more about SailPoint Developer Days 2025
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageGettingStarted;
