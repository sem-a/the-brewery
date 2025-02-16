import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import { Container } from "../../components/container";
import { FormButton, Input, Label } from "../../components/form";
import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import { useBreweryById } from "../../store/hooks/breweryId";

const Edit = () => {
  const { id } = useParams();
  const { brewery } = useBreweryById(id || "");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (brewery) {
      console.log("dsad");
      setName(brewery.name || "");
      setPhone(brewery.phone || "");
    }
  }, []);

  const handleSubmit = () => {
    const updatedBrewery = {
      ...brewery,
      name: name,
      phone: phone,
    };

    localStorage.setItem(`brewery_${id}`, JSON.stringify(updatedBrewery));

    alert("Данные сохранены!");
  };

  return (
    <div>
      <Header />
      <Container>
        <div className={styles.formItem}>
          <Label>Name:</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.formItem}>
          <Label>Phone:</Label>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <FormButton onClick={handleSubmit}>Edit</FormButton>
      </Container>
    </div>
  );
};

export default Edit;
