import React, { useState } from 'react';
import styles from './styles.module.css';

// Define props interface
interface MarketplaceSidebarButtonProps {
  filterCallback: (filter: { category?: string; tag?: string }) => void;
  text: string;
  id: string;
  isCategory?: boolean;
  category?: string;
}

const MarketplaceSidebarButton: React.FC<MarketplaceSidebarButtonProps> = ({
  filterCallback,
  text,
  id,
  isCategory = false,
  category,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  let activeClass = '';
  if (isCategory && category === id) {
    activeClass = styles.tagSelected;
  } else if (isCategory && category !== id) {
    activeClass = '';
  } else {
    activeClass = isActive ? styles.tagSelected : '';
  }

  let radioClass = isCategory ? styles.radio : styles.checkbox;

  const setFilters = (id: string) => {
    if (isCategory) {
      if (category === id) {
        filterCallback({ category: 'colab' });
        setIsActive(false);
      } else {
        filterCallback({ category: id });
        setIsActive(true);
      }
    } else {
      filterCallback({ tag: id });
      setIsActive((current) => !current);
    }
  };

  return (
    <div>
      <input
        onClick={() => setFilters(id)}
        id={id}
        type="checkbox"
        className={`${styles.sidebarButton} ${radioClass}`}
        checked={activeClass !== ''}
        onChange={handleChange}
      />
      <label htmlFor={id} className={`${activeClass} ${styles.tag}`} key={text}>
        {text}
      </label>
    </div>
  );
};

export default MarketplaceSidebarButton;
