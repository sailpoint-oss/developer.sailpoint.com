import React from 'react';
import styles from './styles.module.css';
import {getTags} from '../../../services/DiscourseService';

export default function BlogSidebar({filterCallback, defaultValue}) {
  const [tagProductData, setTagProductData] = React.useState();
  let initialCheckState = defaultValue === 'Identityiq' ? true : false;
  const [isChecked, setIsChecked] = React.useState(initialCheckState);

  const handleChange = () => {
    setIsChecked(!isChecked);
    let value = isChecked ? 'Identity-Security-Cloud' : 'Identityiq';
    filterCallback(value);
  };

  const getTagData = async () => {
    const data = await getTags();
    const tagTechnologyResultset = [];
    const tagProductResultset = [];
    for (const tagGroup of data.extras.tag_groups) {
      if (tagGroup.id === 45) {
        for (const tag of tagGroup.tags) {
          tagProductResultset.push(tag.text);
        }
      }
    }
    setTagProductData(tagProductResultset);
  };

  React.useEffect(() => {
    getTagData();
  },[]);

  if (tagProductData) {
    return (
      <div className={styles.toggleContainer}>
        <div className={styles.toggleWrapper}>
          <input
            type="checkbox"
            id="product-toggle"
            className={styles.toggleCheckbox}
            checked={isChecked}
            onChange={handleChange}
          />
          <label htmlFor="product-toggle" className={styles.toggleLabel}>
            <div className={styles.toggleBackground}></div>
            <span className={styles.toggleTextLeft}>
              Identity Security Cloud
            </span>
            <span className={styles.toggleTextRight}>IdentityIQ</span>
          </label>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
