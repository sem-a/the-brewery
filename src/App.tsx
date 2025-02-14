import React from "react";
import { Layout } from "./components/layout";
import { Container } from "./components/container";
import Recipe from "./components/recipe";
import Search from "./components/search";
import Header from "./components/header";
import { useRecipes } from "./store/hooks/recipes";

function App() {
  const { recipes } = useRecipes();

  function getRecipeWordCount(count: number) {
    if (count === 1) {
      return "рецепт"; // 1 рецепт
    } else if (count > 1 && count < 5) {
      return "рецепта"; // 2, 3, 4 рецепта
    } else {
      return "рецептов"; // 5 и больше рецептов
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Search />
        <p className="results">
          Результат поиска:{" "}
          <span>
            {recipes.length === 0
              ? "ничего не найдено"
              : `${recipes.length} ${getRecipeWordCount(recipes.length)}`}
          </span>
        </p>
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              ingredients={recipe.ingredients}
            />
          ))}
        </div>
      </Container>
      {/* <Layout /> */}
    </>
  );
}

export default App;
