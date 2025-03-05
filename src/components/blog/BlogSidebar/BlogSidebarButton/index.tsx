import React, { useState } from 'react';
import styles from './styles.module.css';

// Define props interface
interface BlogSidebarButtonProps {
  filterCallback: (value: string) => void;
  text: string;
}

const BlogSidebarButton: React.FC<BlogSidebarButtonProps> = ({ filterCallback, text }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const activeClass = isActive ? styles.tagSelected : '';

  const setFilters = (value: string) => {
    filterCallback(value);
    setIsActive((current) => !current);
  };

  return (
    <div
      key={text}
      onClick={() => setFilters(text)}
      className={`${activeClass} ${styles.tag}`}
    >
      {text}
    </div>
  );
};

export default BlogSidebarButton;
