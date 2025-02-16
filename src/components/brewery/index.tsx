import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { PATHS } from "../../paths";
import { H2 } from "../title";
import { BreweryType } from "../../types";
import styles from "./index.module.css";

const Brewery = (brewery: BreweryType) => {
  const address = `${brewery.street} ${brewery.city} ${brewery.state} ${brewery.country}`;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <H2>{brewery.name}</H2>
        <div className={styles.nav}>
          <Link to={`${PATHS.brewery}/${brewery.id}`}>
            <Button>open</Button>
          </Link>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.info}>
          <p>
            <span>Address: </span>
            {address}
          </p>
        </div>
        <div className={styles.info}>
          <p>
            <span>Type: </span>
            {brewery.brewery_type}
          </p>
        </div>
        <div className={styles.info}>
          <p>
            <span>Phone: </span>
            {brewery.phone}
          </p>
        </div>
        <div className={styles.info}>
          <p>
            <span>Web-site: </span>
            {brewery.website_url === null ? (
              "no"
            ) : (
              <Link to={brewery.website_url} target="_blank">
                {brewery.website_url}
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brewery;
