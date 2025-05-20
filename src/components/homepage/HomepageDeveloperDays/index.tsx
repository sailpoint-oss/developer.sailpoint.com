import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage, { type Props as ThemedImageProps } from '@theme/ThemedImage';

const HomepageGettingStarted: React.FC = () => {
  return (
    <div>
      <div className={styles.mainCard}>
        <div className={styles.contentContainer}>
          <div className={styles.gettingStartedText}>
            <div className={styles.gettingStartedOne}>SailPoint Developer Days</div>
            <div className={styles.gettingStartedTwo}>Developer Days 2025 is now live!</div>
            <div className={styles.gettingStartedThree}>
              Our largest conference for developers, architects, administrators, and more is finally here! Explore
              <span className={styles.bold}> cutting-edge technologies</span>, gain insights from industry leaders, and
              connect with fellow developers.
            </div>
          </div>
          <div className={styles.gridContainer}>
            <div>
              {/* <a href="https://developer.sailpoint.com/discuss/developerdays" className={styles.registerButtonPink}>
                Register now
              </a> */}
              <a href="https://developer.sailpoint.com/discuss/developerdays" className={styles.registerButtonPink}>
                Watch Now!
              </a>

            </div>
          </div>
        </div>
        <div>
           {ThemedImage && (
             <ThemedImage
               className={styles.cardIcon}
               sources={{
                 light: useBaseUrl('/homepage/DeveloperDays2025-SailPointLockup-LightMode.png'),
                 dark: useBaseUrl('/homepage/DeveloperDays2025-SailPointLockup-DarkMode.png'),
               }}
             />
           )}
         </div>
      </div>
    </div>
  );
};

export default HomepageGettingStarted;
