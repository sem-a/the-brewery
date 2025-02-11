import React from "react";
import { Layout } from "./components/layout";
import { Container } from "./components/container";
import Recipe from "./components/recipe";

function App() {
  return (
    <>
      <Container>
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </Container>
    </>
  );
}

export default App;
