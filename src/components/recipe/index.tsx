import React from "react";
import { Button } from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { PATHS } from "../../paths";

type RecipeType = {
  id: number;
  title: string;
  image: string;
  ingredients: string[];
};

const Recipe: React.FC<RecipeType> = ({ id, title, image, ingredients }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.nav}>
          <Link to={`${PATHS.recipe}/${id}`}>
            <Button>открыть</Button>
          </Link>
        </div>
      </div>
      <div className={styles.body}>
        <img src={image} alt="photo" className={styles.image} />
        <div className={styles.textСontainer}>
          <ul className={styles.ingridients}>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
