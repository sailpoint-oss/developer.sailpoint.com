import React from 'react';
import TeamCard from '../TeamCard';
import styles from './styles.module.css';

interface TeamMember {
  link: string;
  name: string;
  title: string[];
  expertise: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    link: 'https://developer.sailpoint.com/discuss/u/heatherstorm/summary',
    name: 'Heather Storm',
    title: ['Senior Manager', 'Developer Relations'],
    expertise: 'DEVELOPER TOOLS',
    image: '/homepage/heather-storm.jpg',
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
    link: 'https://developer.sailpoint.com/discuss/u/dnandrist/summary',
    name: 'Danielle Andrist',
    title: ['Developer Community', 'Program Manager'],
    expertise: 'COMMUNITY',
    image: '/homepage/danielle-andrist.jpg',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/lukehagar/summary',
    name: 'Luke Hagar',
    title: ['Software Engineer'],
    expertise: 'DEVELOPER TOOLS',
    image: '/homepage/lukehagar.png',
  },
    {
    link: 'https://developer.sailpoint.com/discuss/u/austin_grimes/summary',
    name: 'Austin Grimes',
    title: ['Community Evangelist'],
    expertise: 'COMMUNITY',
    image: '/homepage/austin-grimes.png',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/samantha_holstine/summary',
    name: 'Samantha Holstine',
    title: ['Software Engineer'],
    expertise: 'DEVELOPER TOOLS',
    image: '/homepage/samantha-holstine.png',
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
