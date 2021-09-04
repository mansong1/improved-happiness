import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Background, Form, GlobalStyle, InputsWrapper, InputsWrapperItem, Input } from "./styles";

const Home = () => {
  return (
    <Background>
      <GlobalStyle />
      <Form>
        <InputsWrapper>
          <InputsWrapperItem>
            <FontAwesomeIcon icon={faUser} />
            <Input placeholder="Username" />
          </InputsWrapperItem>
          <InputsWrapperItem>
            <FontAwesomeIcon icon={faUser} />
            <Input placeholder="Password" />
          </InputsWrapperItem>
        </InputsWrapper>
      </Form>
    </Background>
  );
};

export default Home;