import React from "react";
import { FormButton, Input, Label } from "../form";
import styles from "./index.module.css";
import { useIngredients } from "../../store/hooks/ingredients";
import { Ingredients, RecipeApi } from "../../types";
import { useRecipes } from "../../store/hooks/recipes";

const Search = () => {
  const { updateIngredients } = useIngredients();
  const { ingredients } = useIngredients();
  const { updateRecipes } = useRecipes();

  const handleSearch = () => {
    if (ingredients.length === 0) {
      console.log("Введите поисковый запрос!");
      return;
    }

    const ingredientString = ingredients.join(",+");

    const apiKey = "4915829bef914b4893e07056fe98b1e2";

    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientString}`;

    // Отправка GET-запроса к API
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка сети");
        }
        return response.json();
      })
      .then((data) => {
        const recipes = data.map((recipe: RecipeApi) => {
          const allIngredients = [
            ...recipe.missedIngredients.map(
              (ingredient: Ingredients) => ingredient.name
            ),
            ...recipe.usedIngredients.map(
              (ingredient: Ingredients) => ingredient.name
            ),
          ];
          return {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            ingredients: allIngredients,
          };
        });
        updateRecipes(recipes);
      })
      .catch((error) => {
        console.error("Произошла ошибка при выполнении запроса:", error);
      });
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const ingredientsArray = inputValue
      .toLowerCase()
      .split(/[\s,]+/)
      .filter((ingredient: string) => ingredient.trim() !== "");

    updateIngredients(ingredientsArray);
  };

  return (
    <div className={styles.search}>
      <Label htmlFor="ingredients">Желаемые ингредиенты:</Label>
      <Input
        placeholder="Помидор, лук, огурец"
        onChange={(e) => handleChangeInput(e)}
      />
      <FormButton onClick={handleSearch}>найти рецепты</FormButton>
    </div>
  );
};

export default Search;
