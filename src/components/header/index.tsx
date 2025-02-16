import React from "react";
import styles from "./index.module.css";
import { Container } from "../container";

const Header = () => {
  return (
    <header>
      <Container><h1 className={styles.logo}>TheBrewery</h1></Container>
    </header>
  );
};

export default Header;
