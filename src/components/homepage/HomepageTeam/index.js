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
          expertise={'APIs, WORKFLOWS, EVENT TRIGGERS'}
          image={'/homepage/colin-mckibben.png'}
        />
        <TeamCard
          link={'https://developer.sailpoint.com/discuss/u/lukehagar/summary'}
          name={'Luke Hagar'}
          title={'Senior Developer Advocate'.toUpperCase()}
          expertise={'DEVELOPER TOOLS, APIs, IAM'}
          image={'/homepage/lukehagar.png'}
        />
        <TeamCard
          link={
            'https://developer.sailpoint.com/discuss/u/tyler_mairose/summary'
          }
          name={'Tyler Mairose'}
          title={'Staff Software Engineer'.toUpperCase()}
          expertise={'RULES, TRANSFORMS'}
          image={'/homepage/tyler-mairose.png'}
        />
        <TeamCard
          link={
            'https://developer.sailpoint.com/discuss/u/philip-ellis/summary'
          }
          name={'Philip Ellis'}
          title={'Lead Software Engineer'.toUpperCase()}
          expertise={'DEVELOPER TOOLS, SAAS CONNECTIVITY'}
          image={'/homepage/phil-ellis.png'}
        />
        <TeamCard
          link={'https://developer.sailpoint.com/discuss/u/jthaytko/summary'}
          name={'James Haytko'}
          title={'Technical Writer'.toUpperCase()}
          expertise={'DEVELOPER DOCUMENTATION'}
          image={'/homepage/james-haytko.png'}
        />
      </div>
    </div>
  );
}
