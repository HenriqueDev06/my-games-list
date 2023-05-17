import styled from "styled-components";

export const Container = styled.div`
  min-height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${(props) => props.gameimage});
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 6px;
  transition: 0.4s ease;

  position: relative;

  #gameName1 {
    width: 100%;
    font-size: 15px;
    text-align: center;
    transition: 0.2s ease;

    padding: 10px 0px;
    padding-bottom: 22px;

    background: linear-gradient(to top, rgba(0, 0, 0), rgb(0, 0, 0, 0));
    position: absolute;
    bottom: 0;
  }

  :hover {
    #gameName1 {
      opacity: 0;
      transform: translateY(25px);
    }
  }

  #fav {
    position: absolute;
    top: 9px;
    right: 9px;
    z-index: 11;
    cursor: pointer;

    svg {
      transition: 0.4s ease;
      :hover {
        fill: #6bf553;
      }
    }
  }

  .game-info {
    height: 100%;
    width: 100%;
    border-radius: 6px;

    background: rgba(0, 0, 0, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    position: relative;

    opacity: 0;
    transition: 0.4s ease;

    h1 {
      transition: 0.4s ease;
      margin: 0 5px;
      text-align: center;
    }

    .info {
      position: absolute;
      bottom: 20px;
      transition: 0.4s ease;

      span {
        margin: 0 10px;
      }
    }

    :hover {
      opacity: 1;
      border: 1px solid #6bf553;

      box-shadow: 11px 11px 22px #090909, -11px -11px 22px #111111;

      h1 {
        transform: translateY(-10px);
      }

      .info {
        transform: translateY(-10px);
      }
    }
  }
`;
