import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import HomepageCard from '../HomepageCard';

interface TrainingGuide {
  link: string;
  title: string;
  image: string;
  isThemedImage?: boolean;
}

const trainingGuides: TrainingGuide[] = [
  {
    link: '/docs/api/getting-started',
    title: 'Make your first API call',
    image: '/homepage/cloud-data.svg',
  },
  {
    link: '/docs/extensibility/transforms/guides/your-first-transform',
    title: 'Build a Transform',
    image: '/homepage/process.svg',
  },
  {
    link: '/docs/connectivity/saas-connectivity',
    title: 'Build a SaaS Connector',
    image: '/homepage/connectivity.svg',
  },
  {
    link: 'https://documentation.sailpoint.com/identityiq/help/plugins/develop_plugins/index.html',
    title: 'Build an IdentityIQ Plugin',
    image: '/homepage/puzzle.svg',
    isThemedImage: true,
  },
];

const HomepageTrainingGuides: React.FC = () => {
  return (
    <div className={styles.center}>
      <div className={styles.gridContainer}>
        {trainingGuides.map((guide, index) => (
          <HomepageCard
            key={index}
            link={guide.link}
            title={guide.title}
            image={guide.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HomepageTrainingGuides;
