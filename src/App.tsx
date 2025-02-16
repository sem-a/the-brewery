import React, { useState } from "react";
import { Container } from "./components/container";
import Header from "./components/header";
import Brewery from "./components/brewery";
import { useBreweries } from "./store/hooks/brewery";
import { BreweryType } from "./types";
import { Button } from "./components/button";

function App() {
  const { breweries, status, error } = useBreweries();
  const [visibleCount, setVisibleCount] = useState(10);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <Container>
        {breweries.slice(0, visibleCount).map((brewery: BreweryType) => (
          <Brewery key={brewery.id} {...brewery} />
        ))}
        <div
          style={{
            textAlign: "center",
            marginTop: "14px",
            paddingBottom: "14px",
          }}
        >
          {visibleCount < breweries.length && (
            <Button onClick={handleLoadMore}>показать еще</Button>
          )}
        </div>
      </Container>
    </>
  );
}

export default App;
