import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import TeamCard from '../TeamCard';

interface TeamMember {
  link: string;
  name: string;
  title: string;
  expertise: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    link: 'https://developer.sailpoint.com/discuss/u/colin_mckibben/summary',
    name: 'Colin McKibben',
    title: 'Lead Developer Advocate'.toUpperCase(),
    expertise: 'Identity Security Cloud'.toUpperCase(),
    image: '/homepage/colin-mckibben.png',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/tyler_mairose/summary',
    name: 'Tyler Mairose',
    title: 'Developer Advocate'.toUpperCase(),
    expertise: 'Identity Security Cloud'.toUpperCase(),
    image: '/homepage/tyler-mairose.png',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/christina_gagnon/summary',
    name: 'Christina Gagnon',
    title: 'Developer Advocate'.toUpperCase(),
    expertise: 'Identity Security Cloud'.toUpperCase(),
    image: '/homepage/christina-gagnon.png',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/jthaytko/summary',
    name: 'James Haytko',
    title: 'Technical Writer'.toUpperCase(),
    expertise: 'DEVELOPER DOCUMENTATION',
    image: '/homepage/james-haytko.png',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/philip-ellis/summary',
    name: 'Philip Ellis',
    title: 'Lead Software Engineer'.toUpperCase(),
    expertise: 'DEVELOPER TOOLS',
    image: '/homepage/phil-ellis.png',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/Darrell/summary',
    name: 'Darrell Thobe',
    title: 'Software Engineer'.toUpperCase(),
    expertise: 'DEVELOPER TOOLS',
    image: '/homepage/darrell-thobe.png',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/lukehagar/summary',
    name: 'Luke Hagar',
    title: 'Software Engineer'.toUpperCase(),
    expertise: 'DEVELOPER TOOLS',
    image: '/homepage/lukehagar.png',
  },
];

const HomepageTeam: React.FC = () => {
  return (
    <div className={styles.center}>
      <div className={styles.gridContainer}>
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            link={member.link}
            name={member.name}
            title={member.title}
            expertise={member.expertise}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HomepageTeam;
