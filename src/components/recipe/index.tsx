import React from "react";
import styles from "./index.module.css";
import { Button } from "../button";

const Recipe = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Салат Летний</h2>
        <Button>открыть</Button>
      </div>
      <div className={styles.body}>
        <img
          src={require("../../assest/1.png")}
          alt="photo"
          className={styles.image}
        />
        <div className={styles.textСontainer}>
          <p className={styles.description}>
            ctetur adipisicing elit. Magni, beatae voluptates commodi, suscipit
            molestiae perspiciatis sed, vero numquam blanditiis maxime porro quo
            fugiat eaque possimus atque doloremque natus consequatur dolorem?
          </p>
          <ul className={styles.ingridients}>
            <li>помидор</li>
            <li>огурец</li>
            <li>лук</li>
            <li>лист салата</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
