import React, { useState } from 'react';
import styles from './styles.module.css';

// Define the props interface
interface MarketplaceSidebarButtonProps {
  filterCallback: (filter: { tag: string }) => void;
  text: string;
  id: string;
  isCategory?: boolean;
  category?: string;
}

const MarketplaceSidebarButton: React.FC<MarketplaceSidebarButtonProps> = ({
  filterCallback,
  text,
  id,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const activeClass = isActive ? styles.tagSelected : '';

  const setFilters = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();
    filterCallback({ tag: id });
    setIsActive((current) => !current);
  };

  return (
    <div
      key={id}
      onClick={(e) => setFilters(e, id)}
      className={`${activeClass} ${styles.tag}`}
    >
      {text}
    </div>
  );
};

export default MarketplaceSidebarButton;
