import React from 'react';
import clsx from 'clsx';
import ConferenceTitle from '../Title';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import SpeakerCard from '../SpeakerCard';
export default function ConferenceSpeakers() {
  return (
    <div className={styles.main}>
      <ConferenceTitle
        description={
          'Take a sneak peek at our upcoming lineup of expert guests'
        }
        title={'Speakers'}
        image={'/conf/calendar-star.png'}></ConferenceTitle>
      <div className={styles.center}>
        <div className={styles.gridContainer}>
          <SpeakerCard
            link={
              'https://developer.sailpoint.com/discuss/u/colin_mckibben/summary'
            }
            name={'Colin McKibben'}
            title={'DEVELOPER ADVOCATE'}
            image={'/homepage/colin-mckibben.png'}></SpeakerCard>
          <SpeakerCard
            link={
              'https://developer.sailpoint.com/discuss/u/tyler_mairose/summary'
            }
            name={'Tyler Mairose'}
            title={'DEVELOPER ADVOCATE'}
            image={'/homepage/tyler-mairose.png'}></SpeakerCard>
          <SpeakerCard
            link={
              'https://developer.sailpoint.com/discuss/u/philip-ellis/summary'
            }
            name={'Philip Ellis'}
            title={'DEVELOPER ADVOCATE'}
            image={'/homepage/phil-ellis.png'}></SpeakerCard>
          <SpeakerCard
            link={'https://developer.sailpoint.com/discuss/u/jthaytko/summary'}
            name={'James Haytko'}
            title={'TECHNICAL WRITER'}
            image={'/homepage/james-haytko.png'}></SpeakerCard>
        </div>
      </div>
    </div>
  );
}
