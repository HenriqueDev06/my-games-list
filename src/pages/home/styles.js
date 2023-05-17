import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  overflow-x: hidden;

  background: ${(props) => props.theme.background};
`;
