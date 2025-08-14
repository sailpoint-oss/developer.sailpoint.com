import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import TeamCard from '../TeamCard';

interface TeamMember {
  link: string;
  name: string;
  title: string[];
  expertise: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    link: 'https://developer.sailpoint.com/discuss/u/taylor_wingfield/summary',
    name: 'Taylor Wingfield',
    title: ['Interim Manager', 'Developer Relations'],
    expertise: 'Identity Security Cloud'.toUpperCase(),
    image: '/homepage/taylor-wingfield.jpeg',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/tyler_mairose/summary',
    name: 'Tyler Mairose',
    title: ['Developer Advocate'],
    expertise: 'Identity Security Cloud'.toUpperCase(),
    image: '/homepage/tyler-mairose.png',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/philip-ellis/summary',
    name: 'Philip Ellis',
    title: ['Principal Software Engineer'],
    expertise: 'DEVELOPER TOOLS',
    image: '/homepage/phil-ellis.png',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/Darrell/summary',
    name: 'Darrell Thobe',
    title: ['Software Engineer'],
    expertise: 'DEVELOPER TOOLS',
    image: '/homepage/darrell-thobe.png',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/lukehagar/summary',
    name: 'Luke Hagar',
    title: ['Software Engineer'],
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
