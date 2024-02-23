import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function DeveloperDays() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.splitdiv}>
        <div>
          <img
            className={styles.devdaysimg}
            src={useBaseUrl('/img/DeveloperDays2024.png')}></img>
        </div>
        <div>
          <h2>Celebrate the heroes behind the implementation!</h2>
        </div>
        <div className={styles.devdayscontent}>
          <h4>
            SailPoint Developer Days is a hands-on, technical conference where
            we’ll be showing you how to write code and interact with our
            platform’s best developer features. Along with our incredible
            customers and partners, we will be presenting real code,
            implementations, and discussions on solving identity problems with
            SailPoint. We’ll also announce new developer tools, introduce new AI
            experiences for developers, and more.{' '}
          </h4>
          <h4>
            Join us for SailPoint Developer Days 2024, our annual conference for
            those building identity solutions with SailPoint. This event is
            virtual and free to attend, and is happening this year in three
            different time zones:
          </h4>
        </div>
        <div className={styles.button}>
          <Link
            className={styles.link}
            to={'https://developer.sailpoint.com/developerdays'}>
            Register for free today
          </Link>
        </div>
      </div>
      <div>
        <p>
          <h3 className={styles.headingTitle}>
            AMS (Virtual attendance, Streams live)
          </h3>{' '}
          <h4 className={styles.subtitle}>&emsp;IdentityNow</h4>{' '}
          <p>
            &emsp;&emsp;Apr 9, 2024 - Apr 12, 2024 (4 days)
            <br /> &emsp;&emsp;9:00am - 3:00pm CT
          </p>{' '}
          <h4 className={styles.subtitle}>&emsp;IdentityIQ</h4>{' '}
          <p>
            &emsp;&emsp;Apr 9, 2024 (1 day)
            <br />
            &emsp;&emsp;9:00am - 3:00pm CT
          </p>{' '}
          <h3 className={styles.headingTitle}>
            EMEA & IST (Virtual attendance, Streams semi-live)
          </h3>
          <h4 className={styles.subtitle}>&emsp;IdentityNow</h4>{' '}
          <p>
            &emsp;&emsp;Apr 15, 2024 - Apr 18, 2024 (4 days)
            <br /> &emsp;&emsp;11:00am - 5:00pm CET / 4:30pm - 10:30pm IST
          </p>{' '}
          <h4 className={styles.subtitle}>&emsp;IdentityIQ</h4>{' '}
          <p>
            &emsp;&emsp;Apr 15, 2024 (1 day)
            <br />
            &emsp;&emsp;11:00am - 5:00pm CET / 4:30pm - 10:30pm IST
          </p>{' '}
          <h3 className={styles.headingTitle}>
            ANZ & APAC (Virtual attendance, Streams semi-live)
          </h3>{' '}
          <h4 className={styles.subtitle}>&emsp;IdentityNow</h4>{' '}
          <p>
            &emsp;&emsp;Apr 23, 2024 - Apr 26, 2024 (4 days)
            <br /> &emsp;&emsp;11:00am - 5:00pm AEDT / 7:00am - 1:00pm HKT
          </p>{' '}
          <h4 className={styles.subtitle}>&emsp;IdentityIQ</h4>{' '}
          <p>
            &emsp;&emsp;Apr 23, 2024 (1 day)
            <br />
            &emsp;&emsp;11:00am - 5:00pm AEDT / 7:00am - 1:00pm HKT
          </p>{' '}
        </p>
      </div>
    </div>
  );
}
