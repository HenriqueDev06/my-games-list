import styled from "styled-components";

export const Container = styled.div`
  height: 65px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  #profile {
    height: 45px;
    width: 45px;

    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.backColor};
  }

  #info {
    margin-right: 8px;

    p {
      font-size: 12px;
      font-weight: 300;
      text-align: end;

      cursor: pointer;

      color: salmon;
      opacity: 0.8;
      transition: 0.2s ease;

      :hover {
        opacity: 1;
      }
    }

    h1 {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
