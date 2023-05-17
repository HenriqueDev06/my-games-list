import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding-top: 30px;

  #title {
    width: 90%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    #back {
      margin: 0px 10px;
      font-size: 25px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    h1 {
      font-size: 45px;
    }
  }

  hr {
    height: 1px;
    width: 90%;

    margin: 5px 0px;

    background: rgba(255, 255, 255, 0.4);
  }
`;
