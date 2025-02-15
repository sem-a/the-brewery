import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Header from "../../components/header";
import { Link, useParams } from "react-router-dom";
import { Container } from "../../components/container";
import { useRecipeById } from "../../store/hooks/recipes";
import { H2 } from "../../components/title";
import { Button } from "../../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { PATHS } from "../../paths";

const Recipe = () => {
  const { id } = useParams();

  const recipe = useRecipeById(Number(id));

  return (
    <div style={{ paddingBottom: "42px" }}>
      <Header />
      <Container>
        <div className={styles.card}>
          <div className={styles.header}>
            <H2>{recipe?.title}</H2>
            <Link to={`${PATHS.edit}/${id}`}>
              <Button>
                <FontAwesomeIcon icon={faPen} />
              </Button>
            </Link>
          </div>
          <div className={styles.body}>
            <img src={recipe?.image} alt={recipe?.title} />
            <ul className={styles.ingridients}>
              {recipe?.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Recipe;
