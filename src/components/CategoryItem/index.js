import React from "react";
import { Container, CategoryImage } from "./styled";

export default ({data, activeCategory, setActiveCategory}) => {

  return (
    <Container 
      active={activeCategory}
      id={data.id}
      onClick={e => setActiveCategory(data.id)}
      data-tip={data.name}
      data-for="tip-top"
    >
      <CategoryImage src={data.image} />
    </Container>
  );
}