import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import TeamCard from '../TeamCard';
export default function HomepageTeam() {
  return (
    <div className={styles.center}>
      <div className={styles.gridContainer}>
        <TeamCard
          link={
            'https://developer.sailpoint.com/discuss/u/colin_mckibben/summary'
          }
          name={'Colin McKibben'}
          title={'Lead Developer Advocate'.toUpperCase()}
          expertise={'Identity Security Cloud'.toUpperCase()}
          image={'/homepage/colin-mckibben.png'}
        />
        <TeamCard
          link={
            'https://developer.sailpoint.com/discuss/u/tyler_mairose/summary'
          }
          name={'Tyler Mairose'}
          title={'Developer Advocate'.toUpperCase()}
          expertise={'Identity Security Cloud'.toUpperCase()}
          image={'/homepage/tyler-mairose.png'}
        />
        <TeamCard
          link={
            'https://developer.sailpoint.com/discuss/u/christina_gagnon/summary'
          }
          name={'Christina Gagnon'}
          title={'Developer Advocate'.toUpperCase()}
          expertise={'Identity Security Cloud'.toUpperCase()}
          image={'/homepage/christina-gagnon.png'}
        />
        <TeamCard
          link={'https://developer.sailpoint.com/discuss/u/jthaytko/summary'}
          name={'James Haytko'}
          title={'Technical Writer'.toUpperCase()}
          expertise={'DEVELOPER DOCUMENTATION'}
          image={'/homepage/james-haytko.png'}
        />
        <TeamCard
          link={
            'https://developer.sailpoint.com/discuss/u/philip-ellis/summary'
          }
          name={'Philip Ellis'}
          title={'Lead Software Engineer'.toUpperCase()}
          expertise={'DEVELOPER TOOLS'}
          image={'/homepage/phil-ellis.png'}
        />
        <TeamCard
          link={'https://developer.sailpoint.com/discuss/u/Darrell/summary'}
          name={'Darrell Thobe'}
          title={'Software Engineer'.toUpperCase()}
          expertise={'DEVELOPER TOOLS'}
          image={'/homepage/darrell-thobe.png'}
        />
        <TeamCard
          link={'https://developer.sailpoint.com/discuss/u/derek_putnam/summary'}
          name={'Derek Putnam'}
          title={'Community Manager'.toUpperCase()}
          expertise={'DEVELOPER COMMUNITY'}
          image={'/homepage/derek-putnam.jpg'}
        />
      </div>
    </div>
  );
}
