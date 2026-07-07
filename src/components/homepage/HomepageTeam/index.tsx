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
    title: ['Head of', 'Developer Relations'],
    expertise: 'DEVELOPER TOOLS',
    image: '/homepage/heather-storm.jpg',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/philip-ellis/summary',
    name: 'Philip Ellis',
    title: ['Principal Software Engineer'],
    expertise: 'DEVELOPER TOOLS',
    image: '/homepage/phil-ellis.png',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/tyler_mairose/summary',
    name: 'Tyler Mairose',
    title: ['Developer Advocate'],
    expertise: 'DEVELOPER TOOLS',
    image: '/homepage/tyler-mairose.png',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/samantha_holstine/summary',
    name: 'Samantha Holstine',
    title: ['Developer Advocate'],
    expertise: 'DEVELOPER TOOLS',
    image: '/homepage/samantha-holstine.png',
  },
  {
    link: 'https://developer.sailpoint.com/discuss/u/dnandrist/summary',
    name: 'Danielle Andrist',
    title: ['Senior Developer Community', 'Program Manager'],
    expertise: 'COMMUNITY',
    image: '/homepage/danielle-andrist.jpg',
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
