import React from 'react';
import Registration from '../components/registration/registration';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './developerdays.module.css';

export default function developerdays() {
  const {siteConfig} = useDocusaurusContext();
  const sailpointImage = '/img/DevDaysLockup-Color.png';

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <div className={styles.registrationform}>
        <div className={styles.devdayscentercontainer}>
          <img className={styles.devdaysimg} src={sailpointImage}></img>
        </div>
        <div className={styles.devdayscentercontainer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <Registration></Registration>
      </div>
    </Layout>
  );
}
