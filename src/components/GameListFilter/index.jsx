import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { Container, InputContainer } from "./styles";

const GameListFilters = ({ query, setQuery, handleSearch }) => {
  return (
    <Container>
      <InputContainer>
        <input
          value={query}
          onChange={setQuery}
          placeholder="Type game name here!"
        />
      </InputContainer>
      <div id="separator"></div>

      <AiOutlineSearch id="search" size={"30px"} onClick={handleSearch} />
    </Container>
  );
};

export default GameListFilters;
