import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 65px;

  z-index: 99999999999999999999;
  box-shadow: ${(props) =>
    props.visiblee
      ? "11px 11px 22px #090909, -11px -11px 22px #111111"
      : "none"};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 6px 15px;

  #logo {
    height: 55px;
    width: 105px;

    object-fit: contain;
  }

  position: fixed;
  top: 0;

  transition: 0.4s ease;

  background: ${(props) => (props.visiblee ? "rgb(7,7,7)" : "transparent")};
  z-index: 999999999;
`;

export const ButtonsGroup = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 18px;
    font-weight: 300;
    text-align: end;

    margin: 0px 8px;

    cursor: pointer;

    opacity: 0.8;
    transition: 0.2s ease;

    :hover {
      opacity: 1;
    }
  }

  #fav {
    position: relative;

    ::after {
      content: attr(data-count);
      position: absolute;
      top: -3px;
      right: -7px;

      font-size: 10px;
      background: #41d969;
      border-radius: 30%;

      padding: 0px 4px;
    }
  }

  .coming {
    position: relative;

    ::after {
      content: "em breve";
      position: absolute;
      top: -3px;
      right: -7px;

      font-size: 10px;
      background: #41d969;
      border-radius: 4px;

      padding: 0px 4px;
    }
  }
`;
