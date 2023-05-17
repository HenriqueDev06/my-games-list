import React, { createContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import Routes from "./route";
import GlobalStyles from "./styles/globalStyles";

import Themes from "./themes";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [gameList, setGameList] = useState(() => {
    const localStorageState = localStorage.getItem("GameList");
    return localStorageState ? JSON.parse(localStorageState) : [];
  });

  const [user, setUser] = useState(() => {
    const localStorageState = localStorage.getItem("user");
    return localStorageState ? JSON.parse(localStorageState) : "";
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("GameList", JSON.stringify(gameList));
  }, [gameList, user]);

  return (
    <AppContext.Provider value={[gameList, setGameList, user, setUser]}>
      {props.children}
    </AppContext.Provider>
  );
};

const Root = () => {
  return (
    <AppContextProvider>
      <ThemeProvider theme={Themes[0]}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </AppContextProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
