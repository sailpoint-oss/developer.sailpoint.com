import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import HomepageCard from '../HomepageCard';
import { HomepageCardProps } from '../HomepageCard';

interface TrainingGuide {
  product: HomepageCardProps['product'];
  link: string;
  title: string;
  image: string;
  isThemedImage?: boolean;
}

const trainingGuides: TrainingGuide[] = [
  {
    product: 'isc',
    link: '/docs/api/getting-started',
    title: 'Make your first API call',
    image: '/homepage/cloud-data.svg',
  },
  {
    product: 'isc',
    link: '/docs/extensibility/transforms/guides/your-first-transform',
    title: 'Build a Transform',
    image: '/homepage/process.svg',
  },
  {
    product: 'isc',
    link: '/docs/connectivity/saas-connectivity',
    title: 'Build a SaaS Connector',
    image: '/homepage/connectivity.svg',
  },
  {
    product: 'iiq',
    link: 'https://documentation.sailpoint.com/identityiq/help/plugins/develop_plugins/index.html',
    title: 'Build an IIQ Plugin',
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
            product={guide.product}
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
