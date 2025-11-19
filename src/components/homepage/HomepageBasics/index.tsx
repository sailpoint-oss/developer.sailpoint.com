import React, { JSX } from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPeopleGroup, faUser } from '@fortawesome/free-solid-svg-icons';

interface HomepageBasicsProps {
  link: string;
  title: string;
  image?: 'discuss' | 'team' | 'user';
  description: string;
  buttonText?: string;
}

const HomepageBasics: React.FC<HomepageBasicsProps> = ({ link, title, image, description, buttonText }) => {
  const linkHtml = buttonText ? (
    <div className={styles.button}>
      <Link className={styles.link} to={link}>
        {buttonText}
      </Link>
    </div>
  ) : null;

  const iconMap: Record<string, JSX.Element> = {
    discuss: <FontAwesomeIcon icon={faComments}  style={{fontSize: '3em'}} className={styles.docCardIcon} size="3x" />,
    team: <FontAwesomeIcon icon={faPeopleGroup} style={{fontSize: '3em'}} className={styles.docCardIcon} size="3x" />,
    user: <FontAwesomeIcon icon={faUser}  style={{fontSize: '3em'}} className={styles.docCardIcon} size="3x" />,
  };

  const icon = image ? iconMap[image] || null : null;

  return (
    <div className={styles.gettingStartedText}>
      {icon}
      <div className={styles.gettingStartedOne}>{title}</div>
      <div className={styles.gettingStartedThree} dangerouslySetInnerHTML={{ __html: description }}></div>
      {linkHtml}
    </div>
  );
};

export default HomepageBasics;
