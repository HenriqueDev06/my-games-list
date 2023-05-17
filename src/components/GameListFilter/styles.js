import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px 0px;
  margin-top: 50px;

  width: 90%;
  height: 55px;

  border-radius: 5px;

  border: 1px solid #333;
  /* padding: 18px 10px; */

  #separator {
    width: 3px;
    height: 90%;

    background: #333;
  }

  #search {
    /* background: ${(props) => props.theme.main}; */
    height: 40px;
    min-width: 40px;

    padding: 5px;

    margin: 0 10px;
    cursor: pointer;
  }

  .react-select-container {
    * {
      color: ${(props) => props.theme.text};
      background: transparent;
      border: none;

      outline: none;
      box-shadow: none;

      font-weight: 300;
    }

    margin: 0 10px;

    .react-select__menu {
      background: ${(props) => props.theme.background};
      margin-top: -3px;
    }

    min-width: 200px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  input {
    width: 90%;
    height: 100%;

    background: transparent;
  }
`;
