import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useAnnouncementBar} from '@docusaurus/theme-common/internal';
import AnnouncementBarCloseButton from '@theme/AnnouncementBar/CloseButton';
import AnnouncementBarContent from '@theme/AnnouncementBar/Content';
import {getBanner} from '../../services/CMSService';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
export default function AnnouncementBar() {
  const {siteConfig} = useDocusaurusContext();
  const {announcementBar} = useThemeConfig();
  const {isActive, close} = useAnnouncementBar();
  const {backgroundColor, textColor, isCloseable} = announcementBar;

  const [bannerText, setBannerText] = React.useState('loading banner text ...');
  const [showBanner, setShowBanner] = React.useState(false);

  const closeButton = async () => {
    close();
    setShowBanner(false);
  };

  const getBannerText = async () => {
    let data = await getBanner(siteConfig.customFields.CMS_APP_API_ENDPOINT);
    if (data.Item) {
      if (
        localStorage.getItem('docusaurus.aws.id') !==
          JSON.parse(data.Item).id &&
        localStorage.getItem('docusaurus.announcement.dismiss') == 'true'
      ) {
        localStorage.setItem('docusaurus.announcement.dismiss', false);
        localStorage.setItem('docusaurus.aws.id', JSON.parse(data.Item).id);
        setShowBanner(true);
      } else if (
        localStorage.getItem('docusaurus.announcement.dismiss') == 'false'
      ) {
        setShowBanner(true);
      }
      setBannerText(JSON.parse(data.Item).message);
    } else {
      setBannerText(undefined);
      return;
    }
  };

  React.useEffect(() => {
    getBannerText();
  }, []);

  if (showBanner == false || !bannerText) {
    return null;
  }
  return (
    <div
      className={styles.announcementBar}
      style={{backgroundColor, color: textColor}}
      role="banner">
      {isCloseable && <div className={styles.announcementBarPlaceholder} />}
      <AnnouncementBarContent
        content={bannerText}
        className={styles.announcementBarContent}
      />
      {isCloseable && (
        <AnnouncementBarCloseButton
          onClick={closeButton}
          className={styles.announcementBarClose}
        />
      )}
    </div>
  );
}
