import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import { Container } from "../../components/container";
import { FormButton, Input, Label } from "../../components/form";
import { useParams } from "react-router-dom";
import { useRecipeById } from "../../store/hooks/recipes";
import styles from "./index.module.css";

const Edit = () => {
  const { id } = useParams();
  const recipe = useRecipeById(Number(id));

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setIngredients(recipe.ingredients.join(", ")); // Предполагаем, что ingredients — это массив
    }
  }, [recipe]);

  const handleClick = () => {
    // Создаем объект рецепта
    const updatedRecipe = {
      title,
      ingredients: ingredients.split(",").map((ing) => ing.trim()), // Преобразуем строку обратно в массив
    };

    // Сохраняем рецепт в localStorage
    localStorage.setItem(`${id}`, JSON.stringify(updatedRecipe));
    console.log("Рецепт сохранен в localStorage:", updatedRecipe);
  };

  return (
    <div>
      <Header />
      <Container>
        <div className={styles.form}>
          <div className={styles.formItem}>
            <Label>Title:</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className={styles.formItem}>
            <Label>Ingredients:</Label>
            <Input
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <FormButton onClick={handleClick}>Edit</FormButton>
        </div>
      </Container>
    </div>
  );
};

export default Edit;
