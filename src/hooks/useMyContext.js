import { useContext } from "react";
import { AppContext } from "../index";

export const useMyContext = () => {
  const [gameList, setGameList, user, setUser] = useContext(AppContext);
  return [gameList, setGameList, user, setUser];
};
