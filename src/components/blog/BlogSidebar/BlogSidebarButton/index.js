import React from 'react';
import styles from './styles.module.css';

export default function BlogSidebarButton({filterCallback, text}) {
  const [isActive, setIsActive] = React.useState(false);
  const activeClass = isActive ? styles.tagSelected : '';
  function setFilters(e, f) {
    filterCallback(f);
    setIsActive((current) => !current);
  }
  return (
    <div
      key={text}
      onClick={(e) => setFilters(e, text)}
      className={activeClass + ' ' + styles.tag}>
      {text}
    </div>
  );
}
