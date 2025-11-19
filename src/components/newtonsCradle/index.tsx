import React from 'react';
import Styles from './styles.module.css';

const NewtonsCradle: React.FC = () => {
  return (
    <div className={Styles.container}>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className={Styles.line}></div>
      ))}
    </div>
  );
};

export default NewtonsCradle;
