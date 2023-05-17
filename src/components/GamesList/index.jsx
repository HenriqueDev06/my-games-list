import React, { useState, useEffect } from "react";
import { Container, List } from "./styles";

import GameCard from "../GameCard";
import GameListFilters from "../GameListFilter";

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const GameList = ({ showFilter, onSearch, data }) => {
  const [query, setQuery] = useState("");

  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  function handleSearchQuery() {
    onSearch(query);
  }

  return (
    <Container>
      {showFilter && (
        <GameListFilters
          query={query}
          setQuery={handleInputChange}
          handleSearch={handleSearchQuery}
        />
      )}
      {data && (
        <List>
          {data.map((game) => (
            <GameCard
              gameId={game.id}
              gameImg={game.background_image}
              gameName={game.name}
              gameRating={game.rating}
              gameGenre={game.genres[0] ? game.genres[0].name : ""}
              gameRelease={game.released ? game.released.slice(0, 4) : ""}
            />
          ))}
        </List>
      )}
    </Container>
  );
};
export default GameList;
