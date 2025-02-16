import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header";
import { Container } from "../../components/container";
import { useBreweryById } from "../../store/hooks/breweryId";
import styles from "./index.module.css";
import { H2 } from "../../components/title";
import { PATHS } from "../../paths";
import { Button } from "../../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Brewery = () => {
  const { id } = useParams();
  const { brewery, status, error } = useBreweryById(id || "");

  // Создаем адрес в зависимости от наличия данных о пивоварне
  const address = brewery
    ? `${brewery.street} ${brewery.city} ${brewery.state} ${brewery.country}`
    : "";

  return (
    <>
      <Header />
      <Container>
        {status === "loading" && <p>Загрузка...</p>}{" "}
        {/* Сообщение о загрузке */}
        {error && <p>Ошибка: {error}</p>} {/* Сообщение об ошибке */}
        {brewery ? (
          <div className={styles.card}>
            <div className={styles.header}>
              <H2>{brewery.name}</H2>
              <Link to={`${PATHS.edit}/${id}`}>
                <Button>
                  <FontAwesomeIcon icon={faPen} />
                </Button>
              </Link>
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
        ) : (
          status !== "loading" && <p>Элемент не найден</p> // Сообщение, если пивоварня не найдена
        )}
      </Container>
    </>
  );
};

export default Brewery;
