import {useEffect, useRef, useState} from 'react';
import React from 'react';
import styles from './styles.module.css';

const SearchableDropdown = ({
  options,
  label,
  id,
  selectedVal,
  handleChange,
  placeholder,
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', toggle);
    return () => document.removeEventListener('click', toggle);
  }, []);

  const selectOption = (option) => {
    setQuery(() => '');
    handleChange(option[label]);
    setIsOpen((isOpen) => !isOpen);
  };

  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
    getDisplayValue();
  }

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal) return selectedVal;

    return '';
  };

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1,
    );
  };

  return (
    <div className={styles.dropdown}>
      <div onClick={toggle} className={styles.control}>
        <div className={styles.selected}>
          <input
            placeholder={placeholder}
            ref={inputRef}
            type="text"
            value={getDisplayValue()}
            name="searchTerm"
            onChange={(e) => {
              setQuery(e.target.value);
              handleChange(null);
            }}
            onClick={toggle}
          />
          {!isOpen && (
            <svg
              className={styles.arrow}
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 6.98214L2.1945 0.366427C2.07635 0.250434 1.93495 0.158216 1.77867 0.0952411C1.6224 0.0322664 1.45444 -0.000183042 1.28475 -0.000183049C1.11507 -0.000183057 0.947107 0.0322663 0.790834 0.0952411C0.634561 0.158216 0.493156 0.250434 0.375003 0.366427C0.133504 0.603187 -0.00158695 0.920272 -0.00158697 1.25036C-0.00158698 1.58044 0.133504 1.89752 0.375003 2.13428L8.0895 9.63428C8.20763 9.75006 8.34895 9.84209 8.50508 9.90493C8.66121 9.96778 8.829 10.0002 8.9985 10.0002C9.16801 10.0002 9.33579 9.96778 9.49193 9.90493C9.64806 9.84209 9.78937 9.75006 9.9075 9.63428L17.625 2.13357C17.8665 1.89681 18.0016 1.57973 18.0016 1.24964C18.0016 0.919559 17.8665 0.602474 17.625 0.365713C17.5069 0.24994 17.3656 0.157908 17.2094 0.0950635C17.0533 0.0322191 16.8855 -0.000160987 16.716 -0.000160994C16.5465 -0.000161001 16.3787 0.0322191 16.2226 0.0950634C16.0664 0.157908 15.9251 0.24994 15.807 0.365713L9 6.98214Z"
                fill="#415364"></path>
            </svg>
          )}
          {isOpen && (
            <svg
              className={styles.rotate}
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 6.98214L2.1945 0.366427C2.07635 0.250434 1.93495 0.158216 1.77867 0.0952411C1.6224 0.0322664 1.45444 -0.000183042 1.28475 -0.000183049C1.11507 -0.000183057 0.947107 0.0322663 0.790834 0.0952411C0.634561 0.158216 0.493156 0.250434 0.375003 0.366427C0.133504 0.603187 -0.00158695 0.920272 -0.00158697 1.25036C-0.00158698 1.58044 0.133504 1.89752 0.375003 2.13428L8.0895 9.63428C8.20763 9.75006 8.34895 9.84209 8.50508 9.90493C8.66121 9.96778 8.829 10.0002 8.9985 10.0002C9.16801 10.0002 9.33579 9.96778 9.49193 9.90493C9.64806 9.84209 9.78937 9.75006 9.9075 9.63428L17.625 2.13357C17.8665 1.89681 18.0016 1.57973 18.0016 1.24964C18.0016 0.919559 17.8665 0.602474 17.625 0.365713C17.5069 0.24994 17.3656 0.157908 17.2094 0.0950635C17.0533 0.0322191 16.8855 -0.000160987 16.716 -0.000160994C16.5465 -0.000161001 16.3787 0.0322191 16.2226 0.0950634C16.0664 0.157908 15.9251 0.24994 15.807 0.365713L9 6.98214Z"
                fill="#415364"></path>
            </svg>
          )}
        </div>
      </div>

      <div className={`${isOpen ? styles.optionsopen : styles.options}`}>
        {filter(options).map((option, index) => {
          return (
            <div
              onClick={() => selectOption(option)}
              className={
                styles.option +
                `${option[label] === selectedVal ? 'selected' : ''}`
              }
              key={`${id}-${index}`}>
              {option[label]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchableDropdown;
