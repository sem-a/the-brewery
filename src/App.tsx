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
      return "recipe"; // 1 рецепт
    } else {
      return "recipes";
    }
  }

  return (
    <>
      <Header />
      <Container></Container>
    </>
  );
}

export default App;
