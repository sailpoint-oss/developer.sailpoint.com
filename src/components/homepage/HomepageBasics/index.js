import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {addDarkToFileName} from '../../../util/util';
import ThemedImage from '@theme/ThemedImage';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faComments, faPeopleGroup, faUser } from '@fortawesome/free-solid-svg-icons'; // Fallback classic icons

export default function HomepageBasics({
  link,
  title,
  image,
  description,
  buttonText,
}) {
  let linkHtml = <div></div>;
  if (buttonText) {
    linkHtml = (
      <div className={styles.button}>
        <Link className={styles.link} to={link}>
          {buttonText}
        </Link>
      </div>
    );
  }
  let icon = '';
  if (image) {
    switch (image) {
      case 'discuss': {
        icon = (
          <FontAwesomeIcon
            icon={faComments}
            className={styles.docCardIcon}
            size="3x"
          />
        );
        break;
      }
      case 'team': {
        icon = (
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className={styles.docCardIcon}
            size="3x"
          />
        );
        break;
      }
      case 'user': {
        icon = (
          <FontAwesomeIcon
            icon={faUser}
            className={styles.docCardIcon}
            size="3x"
          />
        );
        break;
      }
      default: {
        icon = '';
      }
    }
  }
  return (
    <div className={styles.gettingStartedText}>
      {icon}
      <div className={styles.gettingStartedOne}>{title}</div>
      <div
        className={styles.gettingStartedThree}
        dangerouslySetInnerHTML={{__html: description}}></div>
      {linkHtml}
    </div>
  );
}
