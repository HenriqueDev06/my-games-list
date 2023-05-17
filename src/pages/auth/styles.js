import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.background};

  #logo {
    height: 50px;
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  width: 45%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px 23px;

  flex-direction: column;
`;

export const FormContainer = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const Background = styled.div`
  width: 55%;
  height: 100%;

  background: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const InputForm = styled.input`
  width: 100%;
  height: 55px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 13px 0px;

  padding-left: 10px;

  border-radius: 7px;

  background: ${(props) => props.theme.background2};
`;

export const ButtonForm = styled.button`
  width: 100%;
  height: 55px;

  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 7px;

  background: ${(props) => props.theme.main};

  cursor: pointer;
`;
