import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { Container } from "./styles";
import { useMyContext } from "../../hooks/useMyContext";
import { removeDuplicates } from "../../hooks/useRemoveDuplicates";

const GameCard = ({
  gameImg,
  gameId,
  gameName,
  gameRating,
  gameGenre,
  gameRelease,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [myState, setMyState] = useMyContext();

  useEffect(() => {
    setIsFavorite(myState.includes(gameId));
  }, [gameId, myState]);

  const handleFavoriteButton = () => {
    const updatedState = isFavorite
      ? myState.filter((id) => id !== gameId)
      : [...myState, gameId];

    setMyState(removeDuplicates(updatedState));
    setIsFavorite(!isFavorite);
  };

  return (
    <Container gameimage={gameImg}>
      <span id="gameName1">{gameName}</span>
      <div className="game-info">
        <h1>{gameName}</h1>
        <div
          id="fav"
          onClick={() => {
            handleFavoriteButton();
          }}
        >
          {isFavorite ? (
            <AiFillHeart size={"20px"} />
          ) : (
            <AiOutlineHeart size={"20px"} />
          )}
        </div>

        <div className="info">
          <span>{gameRelease}</span>
          <span>{gameRating}</span>
          <span>{gameGenre}</span>
        </div>
      </div>
    </Container>
  );
};

export default GameCard;
