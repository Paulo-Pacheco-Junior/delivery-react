import React, { useState } from "react";
import { Container, Logo, SearchInput } from './styled';

export default ({ search, onSearch }) => {

  const [inputActive, setInputActive] = useState(search === '' ? false : true);

  const handleInputFocus = () => {
    setInputActive(true);
  }

  const handleInputBlur = () => {
    if ( search === '') {
      setInputActive(false);
    }
  }

  return (
    <Container>
      <Logo src="/assets/logo.png" />
      <SearchInput 
        type="text"
        placeholder="Digite um produto..."
        value={search}
        onChange={e=>onSearch(e.target.value)}
        active={inputActive}
        onFocus={handleInputFocus}  
        onBlur={handleInputBlur}
      />
    </Container>
  );
}