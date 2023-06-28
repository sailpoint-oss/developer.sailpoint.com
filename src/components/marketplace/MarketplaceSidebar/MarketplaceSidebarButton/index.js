import React from 'react';
import styles from './styles.module.css';


export default function MarketplaceSidebarButton({
    filterCallback,
    text,
    id,
    isCategory,
    category
  }) {
  const [isActive, setIsActive] = React.useState(false);
  let activeClass = ''
  if (isCategory && category === id) {
    activeClass = styles.tagSelected
  } else if (isCategory && category !== id) {
    activeClass = ''
  } else {
    activeClass = isActive ? styles.tagSelected : ''
  }
  //const activeClass = isActive ? styles.tagSelected : ''
  function setFilters(e, id) {
    if (isCategory) {
      if (category === id) {
        filterCallback({"category": "marketplace"})
      } else {
        filterCallback({"category": id})
      }
      
    } else {
      filterCallback({"tag": id})
    }
    setIsActive(current => !current);
    
  }
  return <div key={text} onClick={(e) => setFilters(e, id)} className={activeClass + ' ' + styles.tag}>{text}</div>

}
