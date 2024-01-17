import React from 'react';
import styles from './styles.module.css';

export default function SidebarButton({filterCallback, text, field}) {
  const [isActive, setIsActive] = React.useState(false);
  const activeClass = isActive ? styles.tagSelected : '';
  function setFilters(e, f) {
    filterCallback(field + '-' + f);
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
