import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Content,
  FormContainer,
  Form,
  Background,
  InputForm,
  ButtonForm,
} from "./styles";

import { useMyContext } from "../../hooks/useMyContext";
import { getRandomColor } from "../../services/getRandomColor";

const LoginForm = ({ onSubmit }) => {
  const userRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <Form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(userRef.current.value, passwordRef.current.value);
      }}
    >
      <InputForm
        pattern="[a-zA-Z]{9,17}"
        required
        title="Somente letras, entre 9 a 17 Caracteres!"
        ref={userRef}
        placeholder="Enter your user"
      />
      <InputForm
        pattern="^(?=.*[a-zA-Z])(?=.*\d).{4,15}$"
        required
        title="Deve conter letras e numeros, entre 4 a 15 Caracteres!"
        ref={passwordRef}
        placeholder="Password"
      />
      <ButtonForm>Login</ButtonForm>
    </Form>
  );
};

const AuthPage = () => {
  const navigate = useNavigate();
  const [gameList, setGameList, user, setUser] = useMyContext();

  const backColor = getRandomColor();

  const handleLoginUser = async (user, password) => {
    await setUser({
      user,
      password,
      color: backColor,
    });
    navigate("/home");
  };

  useEffect(() => {
    if (!user == "") {
      navigate("home");
    }
  }, []);

  return (
    <Container>
      <Background imgSrc="https://media.wired.com/photos/5fc597f0a0c817edec9eeaf8/master/pass/games_streaming.jpg"></Background>
      <Content>
        <img
          id="logo"
          alt="logo"
          src="https://images.squarespace-cdn.com/content/v1/5fb6e2c13e73a61eddbcbcf3/817d9fc5-341f-41d4-9fad-f3051cad3aaa/ALG_logo_color_white_no+tag.png"
        />
        <FormContainer>
          <LoginForm
            onSubmit={(user, password) => {
              handleLoginUser(user, password);
            }}
          />
        </FormContainer>
      </Content>
    </Container>
  );
};

export default AuthPage;
