import React from "react";
import styles from "./index.module.css";
import Header from "../../components/header";
import { useParams } from "react-router-dom";
import { Container } from "../../components/container";

const Recipe = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <Container>
        <div className={styles.body}>{id}</div>
      </Container>
    </div>
  );
};

export default Recipe;
