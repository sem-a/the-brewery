import React from "react";
import styles from "./index.module.css";

type ButtonType = {
  children: React.ReactNode;
};

export const Button: React.FC<ButtonType> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
