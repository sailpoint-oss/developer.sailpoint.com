import React from 'react';
import styles from './styles.module.css';

export default function MarketplaceSidebarButton({
  filterCallback,
  text,
  id,
  isCategory,
  category,
}) {
  const [isActive, setIsActive] = React.useState(false);
  const activeClass = isActive ? styles.tagSelected : '';

  function setFilters(e, id) {
    filterCallback({tag: id});
    setIsActive((current) => !current);
  }

  return (
    <div
      key={id}
      onClick={(e) => setFilters(e, id)}
      className={activeClass + ' ' + styles.tag}>
      {text}
    </div>
  );
}
