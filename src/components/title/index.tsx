import React from "react";
import styles from "./index.module.css";

type H2Type = {
  children: React.ReactNode;
};

export const H2: React.FC<H2Type> = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};
