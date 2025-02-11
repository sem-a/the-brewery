import React from "react";
import styles from "./index.module.css";

export const Layout = () => {
  return (
    <div className={styles.background}>
      <img src={require("../../assest/broccoli.png")} alt="broccoli" />
      <img src={require("../../assest/champignon.png")} alt="broccoli" />
      <img src={require("../../assest/pepper.png")} alt="broccoli" />
      <img src={require("../../assest/potatoes.png")} alt="broccoli" />
      <img src={require("../../assest/tomatoes.png")} alt="broccoli" />
    </div>
  );
};
