import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import NavigationBar from "../../components/NavBar";
import Header from "../../components/Header";
import GameList from "../../components/GamesList";

const HomePage = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState(null);

  const fetchGame = async () => {
    const url = "https://api.rawg.io/api/games";
    const response = await axios.get(url, {
      params: {
        key: "8b5e04c7c2e945cb9b3d610ecb91fdf1",
      },
    });

    setGames(response.data.results);
  };

  useEffect(() => {
    fetchGame();
  }, []);

  const searchGameList = async (query) => {
    const url = "https://api.rawg.io/api/games";
    const response = await axios.get(url, {
      params: {
        key: "8b5e04c7c2e945cb9b3d610ecb91fdf1",
        search: query,
      },
    });

    setGames(response.data.results);
  };

  return (
    <Container>
      <NavigationBar />
      <Header />
      <GameList showFilter={true} data={games} onSearch={searchGameList} />
    </Container>
  );
};

export default HomePage;
