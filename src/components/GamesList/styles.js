import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  /* height: 200vh; */

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding: 20px 0px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 18px;

  width: 90%;

  overflow-y: hidden;
  overflow-x: hidden;
  margin-top: 10px;
`;
