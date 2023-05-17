import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background: url("https://preview.redd.it/hogwarts-legacy-dark-edition-official-pc-wallpaper-v0-potn7vwaxyj91.png?auto=webp&s=2be2adcb6fd6bddf87ec8f4ea55628a3631df1e0");
  background-size: cover;

  #info_header {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    padding: 0px 18px;

    z-index: 11;
    h1 {
      font-size: 64px;
      font-weight: bolder;
      line-height: 60px;

      text-transform: uppercase;

      text-align: center;
    }

    p {
      font-size: 16px;
      font-weight: 300;

      text-align: center;
    }

    span {
      color: goldenrod;
      text-transform: capitalize;

      transition: 0.2s ease;

      opacity: 0.8;
      :hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }
`;

export const BackgroundFade = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.1)
  );
  position: absolute;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  position: absolute;

  bottom: 14px;
  right: 18px;

  svg {
    margin: 8px 0px;
    opacity: 0.6;

    transition: 0.2s ease;

    :hover {
      cursor: pointer;
      opacity: 1;
    }
  }

  background: rgba(0, 0, 0, 0.4);
  border-radius: 5px;

  padding: 12px;
`;

const ScrollDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50%{
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const ScrollDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  position: absolute;
  bottom: 20px;
  left: 50%;

  transform: translateX(-50%);
  cursor: pointer;

  svg {
    animation: ${ScrollDown} 1.5s ease-in-out infinite;
  }
`;
