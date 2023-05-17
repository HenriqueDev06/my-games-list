import React, { useState, useEffect } from "react";
import { Container, ButtonsGroup } from "./styles";

import { useMyContext } from "../../hooks/useMyContext";
import MyProfile from "../MyProfile";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [myState, setMyState] = useMyContext();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container visiblee={scrollPosition > 0 ? true : false}>
      <img
        id="logo"
        alt="logo"
        src="https://images.squarespace-cdn.com/content/v1/5fb6e2c13e73a61eddbcbcf3/817d9fc5-341f-41d4-9fad-f3051cad3aaa/ALG_logo_color_white_no+tag.png"
      />
      <ButtonsGroup>
        <a onClick={scrollTop}>Home</a>
        <Link
          href="."
          id="fav"
          to="/mylist"
          data-count={myState.length === 0 ? "" : myState.length}
        >
          Favoritos
        </Link>
        <Link className="coming">Noticias</Link>
      </ButtonsGroup>
      <MyProfile />
    </Container>
  );
};
export default NavigationBar;
