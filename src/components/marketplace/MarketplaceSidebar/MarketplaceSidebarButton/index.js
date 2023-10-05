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
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  let activeClass = ''
  if (isCategory && category === id) {
    activeClass = styles.tagSelected
  } else if (isCategory && category !== id) {
    activeClass = ''
  } else {
    activeClass = isActive ? styles.tagSelected : ''
  }

  let radioClass = styles.checkbox
  if (isCategory) {
    radioClass = styles.radio
  }
  //const activeClass = isActive ? styles.tagSelected : ''
  function setFilters(e, id) {
    if (isCategory) {
      if (category === id) {
        filterCallback({ "category": "colab" })
        setIsActive(false)
      } else {
        filterCallback({ "category": id })
        setIsActive(true)
      }

    } else {
      filterCallback({ "tag": id })
      setIsActive(current => !current);
    }


  }
  return (
    <div>
      <input onClick={(e) => setFilters(e, id)} id={id} type='checkbox' className={styles.sidebarButton + ' ' + radioClass} checked={activeClass != ''} onChange={handleChange}></input>
      <label htmlFor={id}  className={activeClass + ' ' + styles.tag} key={text}>{text}
      </label>
    </div>
  )
  //return <div key={text} onClick={(e) => setFilters(e, id)} className={activeClass + ' ' + styles.tag}>{text}</div>

}
