import React from "react";
import styles from './index.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingSpinner;
