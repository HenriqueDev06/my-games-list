import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import { useMyContext } from "../../hooks/useMyContext";
import GameList from "../../components/GamesList";

const Component = () => {
  const [gamesData, setGamesData] = useState([]);
  const [myState, setMyState] = useMyContext();

  useEffect(() => {
    const fetchGameDetails = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games?ids=${myState.join(",")}`,
        {
          params: {
            key: "8b5e04c7c2e945cb9b3d610ecb91fdf1",
          },
        }
      );
      setGamesData(response.data.results);
    };
    fetchGameDetails();
  }, [myState]);

  return (
    <Container>
      <div id="title">
        <Link href="." id="back" to="/home">
          <AiOutlineArrowLeft />
        </Link>
        <h1>Jogos Favoritos</h1>
      </div>
      <hr />
      <GameList showFilter={false} data={gamesData}></GameList>
    </Container>
  );
};
export default Component;
