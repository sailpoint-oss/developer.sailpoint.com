import React from 'react';
import styles from './styles.module.css';
import {getVideoPosts, getTags} from '../../../services/DiscourseService';
import {forEach} from 'lodash';

export default function MarketplaceSidebar({filterCallback}) {
  const [tagProductData, setTagProductData] = React.useState();
  const [videoTag, setVideoTag] = React.useState();
  const [isOpen, setIsOpen] = React.useState(false);
  const [productTags, setProductTags] = React.useState('Filter by Product');
  const [videoTags, setVideoTags] = React.useState('Filter by Video Type');
  const [checkedItemsProdcut, setCheckedItemsProduct] = React.useState({});
  const [checkedItemsVideo, setCheckedItemsVideo] = React.useState(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChangeProduct = (event) => {
    setCheckedItemsProduct({
      ...checkedItemsProdcut,
      [event.target.name]: event.target.checked,
    });

    let product = '';

    if (event.target.checked) {
      product = event.target.name;
    } else {
      console.log('productTags', productTags);
      console.log('event.target.name', event.target.name);
      product = productTags.replace(event.target.name, '');
      console.log('product', product);
    }

    let filters = [];
    if (event.target.checked) {
      filters.push(event.target.name);
    }

    forEach(checkedItemsProdcut, (value, key) => {
      if (key !== event.target.name && value === true) {
        filters.push(key);
        if (!product.includes(key)) product = product + ' ' + key;
      }
    });

    if (checkedItemsVideo) {
      filters.push(checkedItemsVideo);
    }

    if (event.target.checked && product !== '') {
      setProductTags(product);
    } else {
      setProductTags(product);
    }

    if (product === '') {
      setProductTags('Filter by Product');
    }

    filterCallback({tag: filters});
  };

  const handleCheckboxChangeVideo = (event) => {
    const newCheckedItems = event.target.checked ? event.target.name : null;
    setCheckedItemsVideo(newCheckedItems);
    if (event.target.checked) {
      setVideoTags(event.target.name);
    } else {
      setVideoTags('Filter by Video Type');
    }
    if (!checkedItemsProdcut) {
      filterCallback({tag: newCheckedItems});
    } else {
      let filters = [];
      if (newCheckedItems) filters.push(newCheckedItems);
      forEach(checkedItemsProdcut, (value, key) => {
        if (value === true) filters.push(key);
      });
      filterCallback({tag: filters});
    }
  };

  const getTagData = async () => {
    const uniqueProductTags = new Set();
    const uniqueTags = new Set();
    const data = await getTags();

    if (data.extras.tag_groups) {
      for (const tagGroup of data.extras.tag_groups) {
        if (tagGroup.name === 'Products') {
          for (const tag of tagGroup.tags) {
            uniqueProductTags.add(tag.name);
          }
        }

        if (tagGroup.name === 'Video Library') {
          for (const tag of tagGroup.tags) {
            uniqueTags.add(tag.name);
          }
        }
      }
    }
    setTagProductData(Array.from(uniqueProductTags));
    setVideoTag(Array.from(uniqueTags));
  };

  function displayText(text) {
    if (text === 'identity-security-cloud') {
      return 'Identity Security Cloud';
    }
    if (text === 'access-intelligence-center') {
      return 'Access Intelligence Center';
    }
    if (text === 'developer-days-2023-iiq') {
      return 'Developer Days 2023 iiq';
    }

    return text;
  }

  React.useEffect(() => {
    getTagData();
  }, []);

  if (tagProductData) {
    return (
      <div className={styles.tagContainer}>
        <div>
          <div className={styles.dropdownContainer}>
            <button onClick={toggleDropdown} className={styles.dropdownButton}>
              {productTags}
            </button>
            {isOpen && (
              <div className={styles.dropdownContent}>
                {tagProductData.map(function (a, index) {
                  return (
                    <div className={styles.dropdownItem} key={index}>
                      <input
                        type="checkbox"
                        id={a}
                        name={a}
                        checked={checkedItemsProdcut[a] || false}
                        onChange={handleCheckboxChangeProduct}
                      />
                      <label htmlFor={a}>{displayText(a)}</label>
                    </div>
                  );
                })}
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
                {videoTag.map(function (a, index) {
                  return (
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
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
