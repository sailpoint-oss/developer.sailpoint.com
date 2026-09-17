import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { getTags } from '../../../services/DiscourseService';
import { canonicalProductTag, SHF_PRODUCT_TAG } from '../../../util/util';

// Define the props interface
interface MarketplaceSidebarProps {
  filterCallback: (filters: { tag: string[] | string | null }) => void;
}

// Video type filters are limited to these tags, in this order
const ALLOWED_VIDEO_TAGS = ['community-live-stream', 'developer-days', 'product-demo'];

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
    const nextChecked = { ...checkedItemsProduct, [name]: checked };
    setCheckedItemsProduct(nextChecked);

    const selectedProducts = Object.keys(nextChecked).filter((key) => nextChecked[key]);
    const filters = [...selectedProducts];

    if (checkedItemsVideo) {
      filters.push(checkedItemsVideo);
    }

    // Label from display names — the button previously showed raw tag slugs.
    setProductTags(
      selectedProducts.length > 0
        ? selectedProducts.map(displayText).join(', ')
        : 'Filter by Product',
    );
    filterCallback({ tag: filters.length > 0 ? filters : null });
  };

  const handleCheckboxChangeVideo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const newCheckedItem = checked ? name : null;
    setCheckedItemsVideo(newCheckedItem);
    setVideoTags(newCheckedItem ? displayText(newCheckedItem) : 'Filter by Video Type');

    const filters: string[] = newCheckedItem ? [newCheckedItem] : [];
    filters.push(
      ...Object.keys(checkedItemsProduct).filter((key) => checkedItemsProduct[key]),
    );

    filterCallback({ tag: filters.length > 0 ? filters : null });
  };

  const getTagData = async () => {
    const uniqueProductTags = new Set<string>();
    const uniqueTags = new Set<string>();
    const data = await getTags();

    if (data.extras?.tag_groups) {
      for (const tagGroup of data.extras.tag_groups) {
        if (tagGroup.name === 'Products') {
          // Canonicalise so the legacy and new product tags collapse into one
          // checkbox instead of two identically-labelled ones.
          tagGroup.tags.forEach((tag: { name: string }) =>
            uniqueProductTags.add(canonicalProductTag(tag.name)),
          );
        }
        if (tagGroup.name === 'Video Library') {
          tagGroup.tags.forEach((tag: { name: string }) => uniqueTags.add(tag.name));
        }
      }
    }

    setTagProductData(Array.from(uniqueProductTags));
    // Limit video type filters to the allowlist, preserving its order
    setVideoTag(ALLOWED_VIDEO_TAGS.filter((tag) => uniqueTags.has(tag)));
  };

  const displayText = (text: string): string => {
    const textMap: Record<string, string> = {
      'community-live-stream': 'Community Live Stream',
      'developer-days': 'Developer Days',
      'product-demo': 'Product Demo',
      // Product tags carry no label of their own, so they used to render as
      // raw slugs. Both product slugs share one label.
      [SHF_PRODUCT_TAG]: 'SailPoint Human Fabric',
      'identity-security-cloud': 'SailPoint Human Fabric',
      identityiq: 'IdentityIQ',
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
