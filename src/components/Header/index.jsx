import React from "react";
import {
  Container,
  BackgroundFade,
  LinkContainer,
  ScrollDownContainer,
} from "./styles";

import { SiEpicgames, SiSteam } from "react-icons/si";
import { RiGlobalLine, RiArrowDownLine } from "react-icons/ri";

import { useMyContext } from "../../hooks/useMyContext";
import { removeDuplicates } from "../../hooks/useRemoveDuplicates";

const HeaderGameLink = () => {
  function openRef(link) {
    window.open(link, "_blank");
  }

  return (
    <LinkContainer>
      <SiEpicgames
        size="35px"
        onClick={() => {
          openRef("https://store.epicgames.com/pt-BR/p/hogwarts-legacy");
        }}
      />
      <SiSteam
        size="35px"
        onClick={() => {
          openRef("https://store.steampowered.com/app/990080/Hogwarts_Legacy/");
        }}
      />
      <RiGlobalLine
        size="35px"
        onClick={() => {
          openRef("https://www.hogwartslegacy.com/pt-br");
        }}
      />
    </LinkContainer>
  );
};

const ScollDownList = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <ScrollDownContainer onClick={scrollDown}>
      <p>Scroll to List</p>
      <RiArrowDownLine />
    </ScrollDownContainer>
  );
};

const HeaderGame = () => {
  // eslint-disable-next-line no-unused-vars
  const [myState, setMyState] = useMyContext();

  const handleFavoriteButton = () => {
    const updatedState = [...myState, 906547];

    setMyState(removeDuplicates(updatedState));
  };

  return (
    <Container>
      <BackgroundFade />
      <HeaderGameLink />
      <ScollDownList />
      <div id="info_header">
        <h1>
          O Jogo escolhido <br />
          pela galera
        </h1>
        <p>
          Por enquanto{" "}
          <span
            title="Adicionar aos favoritos!"
            onClick={() => {
              handleFavoriteButton();
            }}
          >
            hogwarts legacy
          </span>{" "}
          está sendo o jogo mais aclamado pela critica!
        </p>
      </div>
    </Container>
  );
};
export default HeaderGame;
