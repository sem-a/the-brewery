import React from "react";
import styles from "./index.module.css";

type ButtonType = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<ButtonType> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
