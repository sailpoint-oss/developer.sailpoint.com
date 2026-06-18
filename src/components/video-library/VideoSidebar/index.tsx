import {useCallback, useEffect, useState} from 'react';
import type {ChangeEvent, FC} from 'react';
import styles from './styles.module.css';
import { getTags } from '../../../services/DiscourseService';

// Define the props interface
interface MarketplaceSidebarProps {
  selectedCategory?: { tags: string[] };
  filterCallback: (filters: { tag: string[] | string | null }) => void;
}

const displayText = (text: string): string => {
  const textMap: Record<string, string> = {
    'identity-security-cloud': 'Identity Security Cloud',
    'access-intelligence-center': 'Access Intelligence Center',
    'identityiq': 'IdentityIQ',
    'identity-iq': 'IdentityIQ',
    'iiq': 'IIQ',
    'live-stream': 'Live stream',
    'community-live-stream': 'Live stream',
    'developer-days-2023': 'Developer Days 2023',
    'developer-days-2023-iiq': 'Developer Days 2023',
    'developer-days-2024': 'Developer Days 2024',
  };

  return textMap[text] || text.replace(/-/g, ' ');
};

const VideoSidebar: FC<MarketplaceSidebarProps> = ({ filterCallback }) => {
  const [tagProductData, setTagProductData] = useState<string[] | null>(null);
  const [videoTag, setVideoTag] = useState<string[] | null>(null);
  const [isProductOpen, setIsProductOpen] = useState<boolean>(false);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [productTags, setProductTags] = useState<string>('Filter by Product');
  const [videoTags, setVideoTags] = useState<string>('Filter by Video Type');
  const [checkedItemsProduct, setCheckedItemsProduct] = useState<Record<string, boolean>>({});
  const [checkedItemsVideo, setCheckedItemsVideo] = useState<string | null>(null);

  const handleCheckboxChangeProduct = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const nextCheckedItems = {
      ...checkedItemsProduct,
      [name]: checked,
    };

    const selectedProductTags = Object.keys(nextCheckedItems).filter(
      (key) => nextCheckedItems[key],
    );
    const filters = checkedItemsVideo
      ? [...selectedProductTags, checkedItemsVideo]
      : selectedProductTags;

    setCheckedItemsProduct(nextCheckedItems);
    setProductTags(
      selectedProductTags.length > 0
        ? selectedProductTags.map(displayText).join(', ')
        : 'Filter by Product',
    );

    filterCallback({ tag: filters.length > 0 ? filters : null });
  };

  const handleCheckboxChangeVideo = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const newCheckedItem = checked ? name : null;
    const selectedProductTags = Object.keys(checkedItemsProduct).filter(
      (key) => checkedItemsProduct[key],
    );
    const filters = newCheckedItem
      ? [...selectedProductTags, newCheckedItem]
      : selectedProductTags;

    setCheckedItemsVideo(newCheckedItem);
    setVideoTags(newCheckedItem ? displayText(newCheckedItem) : 'Filter by Video Type');

    filterCallback({ tag: filters.length > 0 ? filters : null });
  };

  const getTagData = useCallback(async () => {
    const uniqueProductTags = new Set<string>();
    const uniqueTags = new Set<string>();
    const data = await getTags();

    if (data.extras?.tag_groups) {
      for (const tagGroup of data.extras.tag_groups) {
        if (tagGroup.name === 'Products') {
          tagGroup.tags.forEach((tag: { name: string }) => {
            uniqueProductTags.add(tag.name);
          });
        }
        if (tagGroup.name === 'Video Library') {
          tagGroup.tags.forEach((tag: { name: string }) => {
            uniqueTags.add(tag.name);
          });
        }
      }
    }

    // Replace generic developer-days with year-specific tags discovered from all available tags
    if (uniqueTags.has('developer-days') && Array.isArray(data.tags)) {
      const yearTags: string[] = data.tags
        .map((tag: { name: string }) => tag.name)
        .filter((name: string) => /^developer-days-\d{4}/.test(name))
        .sort();

      if (yearTags.length > 0) {
        uniqueTags.delete('developer-days');
        yearTags.forEach((tag: string) => {
          uniqueTags.add(tag);
        });
      }
    }

    setTagProductData(
      Array.from(uniqueProductTags).sort((a, b) =>
        displayText(a).localeCompare(displayText(b)),
      ),
    );
    setVideoTag(
      Array.from(uniqueTags).sort((a, b) =>
        displayText(a).localeCompare(displayText(b)),
      ),
    );
  }, []);

  useEffect(() => {
    getTagData();
  }, [getTagData]);

  return tagProductData ? (
    <div className={styles.tagContainer}>
      <div>
        <div className={styles.dropdownContainer}>
          <button
            type="button"
            onClick={() => setIsProductOpen(!isProductOpen)}
            className={styles.dropdownButton}>
            {productTags}
          </button>
          {isProductOpen && (
            <div className={styles.dropdownContent}>
              {tagProductData.map((a) => (
                <div className={styles.dropdownItem} key={a}>
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
          <button
            type="button"
            onClick={() => setIsVideoOpen(!isVideoOpen)}
            className={styles.dropdownButton}>
            {videoTags}
          </button>
          {isVideoOpen && (
            <div className={styles.dropdownContent}>
              {videoTag?.map((a) => (
                <div className={styles.dropdownItem} key={a}>
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
