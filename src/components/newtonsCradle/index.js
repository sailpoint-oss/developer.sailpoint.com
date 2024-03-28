import React from 'react';
import Styles from './styles.module.css';

export default function NewtonsCradle() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.dot}></div>
        <div className={Styles.dot}></div>
        <div className={Styles.dot}></div>
        <div className={Styles.dot}></div>
      </div>
    </>
  );
}
