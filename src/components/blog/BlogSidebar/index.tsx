import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { getTags } from '../../../services/DiscourseService';

// Define props interface
interface BlogSidebarProps {
  filterCallback: (value: string) => void;
  defaultValue?: string;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ filterCallback, defaultValue }) => {
  const [tagProductData, setTagProductData] = useState<string[] | undefined>();
  const initialCheckState = defaultValue === 'Identityiq';
  const [isChecked, setIsChecked] = useState<boolean>(initialCheckState);

  const handleChange = () => {
    setIsChecked(!isChecked);
    const value = isChecked ? 'identity-security-cloud' : 'Identityiq';
    filterCallback(value);
  };

  const getTagData = async () => {
    const data = await getTags();
    const tagProductResultset: string[] = [];

    for (const tagGroup of data.extras.tag_groups) {
      if (tagGroup.id === 45) {
        for (const tag of tagGroup.tags) {
          tagProductResultset.push(tag.text);
        }
      }
    }

    setTagProductData(tagProductResultset);
  };

  useEffect(() => {
    getTagData();
  }, []);

  return tagProductData ? (
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
          <span className={styles.toggleTextLeft}>Identity Security Cloud</span>
          <span className={styles.toggleTextRight}>IdentityIQ</span>
        </label>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default BlogSidebar;
