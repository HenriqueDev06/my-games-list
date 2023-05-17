import React, { useEffect } from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

import { useMyContext } from "../../hooks/useMyContext";

const MyProfile = () => {
  const navigate = useNavigate();
  const [gameList, setGameList, user, setUser] = useMyContext();

  useEffect(() => {
    if (user == "") {
      navigate("/");
    }
  }, []);

  const handleLogout = async () => {
    navigate("/");
    await setUser("");
  };

  return (
    <Container backColor={user ? user.color : ""}>
      <div id="info">
        <h1>{user ? user.user : ""}</h1>
        <p
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </p>
      </div>
      <div id="profile">{user ? user.user.slice(0, 2).toUpperCase() : ""}</div>
    </Container>
  );
};

export default MyProfile;
