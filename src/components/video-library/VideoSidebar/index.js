import React from 'react';
import styles from './styles.module.css';
import {getVideoPosts} from '../../../services/DiscourseService';

export default function MarketplaceSidebar({filterCallback}) {
  const [tagProductData, setTagProductData] = React.useState();
  const [isOpen, setIsOpen] = React.useState(false);
  const [checkedItems, setCheckedItems] = React.useState({});
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
    filterCallback({tag: event.target.name});
  };

  const getTagData = async () => {
    const uniqueTags = new Set();
    const data = await getVideoPosts();

    const resultset = [];
    if (data.topic_list) {
      for (const topic of data.topic_list.topics) {
        if (topic.tags.length > 0) {
          topic.tags.forEach((tag) => {
            uniqueTags.add(tag);
          });
        }
      }
    }
    setTagProductData(Array.from(uniqueTags));
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
        <div className={styles.dropdownContainer}>
          <button onClick={toggleDropdown} className={styles.dropdownButton}>
            Filter by Tag...
          </button>
          {
            isOpen && (
              <div className={styles.dropdownContent}>
                {tagProductData.map(function (a, index) {
                  return (
                    <div className={styles.dropdownItem} key={index}>
                      <input
                        type="checkbox"
                        id={a}
                        name={a}
                        checked={checkedItems[a] || false}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor={a}>{displayText(a)}</label>
                    </div>
                  );
                })}
              </div>
            )
            /* <select name="cars" id="cars" onChange={e => setFilters(e, e.target.value)}>
            {tagProductData.map(function (a, index) {
              return <option type="checkbox" value={a}>{displayText(a)}</option>;
            })}
          </select> */
          }
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
