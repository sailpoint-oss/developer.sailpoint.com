import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { getTags } from '../../../services/DiscourseService';
import { forEach } from 'lodash';

// Define the props interface
interface MarketplaceSidebarProps {
  filterCallback: (filters: { tag: string[] | string | null }) => void;
}

const VideoSidebar: React.FC<MarketplaceSidebarProps> = ({ filterCallback }) => {
  const [tagProductData, setTagProductData] = useState<string[] | null>(null);
  const [videoTag, setVideoTag] = useState<string[] | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [productTags, setProductTags] = useState<string>('Filter by Product');
  const [videoTags, setVideoTags] = useState<string>('Filter by Video Type');
  const [checkedItemsProduct, setCheckedItemsProduct] = useState<Record<string, boolean>>({});
  const [checkedItemsVideo, setCheckedItemsVideo] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChangeProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItemsProduct((prevState) => ({
      ...prevState,
      [name]: checked,
    }));

    let product = checked ? name : productTags.replace(name, '').trim();
    let filters: string[] = checked ? [name] : [];

    forEach(checkedItemsProduct, (value, key) => {
      if (key !== name && value) {
        filters.push(key);
        if (!product.includes(key)) product += ` ${key}`;
      }
    });

    if (checkedItemsVideo) {
      filters.push(checkedItemsVideo);
    }

    setProductTags(product || 'Filter by Product');
    filterCallback({ tag: filters.length > 0 ? filters : null });
  };

  const handleCheckboxChangeVideo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const newCheckedItem = checked ? name : null;
    setCheckedItemsVideo(newCheckedItem);
    setVideoTags(newCheckedItem || 'Filter by Video Type');

    let filters: string[] = newCheckedItem ? [newCheckedItem] : [];

    forEach(checkedItemsProduct, (value, key) => {
      if (value) filters.push(key);
    });

    filterCallback({ tag: filters.length > 0 ? filters : null });
  };

  const getTagData = async () => {
    const uniqueProductTags = new Set<string>();
    const uniqueTags = new Set<string>();
    const data = await getTags();

    if (data.extras?.tag_groups) {
      for (const tagGroup of data.extras.tag_groups) {
        if (tagGroup.name === 'Products') {
          tagGroup.tags.forEach((tag: { name: string }) => uniqueProductTags.add(tag.name));
        }
        if (tagGroup.name === 'Video Library') {
          tagGroup.tags.forEach((tag: { name: string }) => uniqueTags.add(tag.name));
        }
      }
    }
    setTagProductData(Array.from(uniqueProductTags));
    setVideoTag(Array.from(uniqueTags));
  };

  const displayText = (text: string): string => {
    const textMap: Record<string, string> = {
      'identity-security-cloud': 'Identity Security Cloud',
      'access-intelligence-center': 'Access Intelligence Center',
      'developer-days-2023-iiq': 'Developer Days 2023 IIQ',
    };

    return textMap[text] || text;
  };

  useEffect(() => {
    getTagData();
  }, []);

  return tagProductData ? (
    <div className={styles.tagContainer}>
      <div>
        <div className={styles.dropdownContainer}>
          <button onClick={toggleDropdown} className={styles.dropdownButton}>
            {productTags}
          </button>
          {isOpen && (
            <div className={styles.dropdownContent}>
              {tagProductData.map((a, index) => (
                <div className={styles.dropdownItem} key={index}>
                  <input
                    type="checkbox"
                    id={a}
                    name={a}
                    checked={checkedItemsProduct[a] || false}
                    onChange={handleCheckboxChangeProduct}
                  />
                  <label htmlFor={a}>{displayText(a)}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.videoTypeFilter}>
        <div className={styles.dropdownContainer}>
          <button onClick={toggleDropdown} className={styles.dropdownButton}>
            {videoTags}
          </button>
          {isOpen && (
            <div className={styles.dropdownContent}>
              {videoTag?.map((a, index) => (
                <div className={styles.dropdownItem} key={index}>
                  <input
                    type="checkbox"
                    id={a}
                    name={a}
                    checked={checkedItemsVideo === a}
                    onChange={handleCheckboxChangeVideo}
                  />
                  <label htmlFor={a}>{displayText(a)}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default VideoSidebar;
