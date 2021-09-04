import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Background, 
  Form, 
  GlobalStyle,
  InputsWrapper,
  InputsWrapperItem,
  Input,
} from "./styles";

const Home = () => {
  return (
    <Background>
      <GlobalStyle />
      <Form>
        <InputsWrapper>
          <InputsWrapperItem>
            <FontAwesomeIcon icon={faUser} />
            <Input placeholder="First Name" />
          </InputsWrapperItem>
          <InputsWrapperItem>
            <FontAwesomeIcon icon={faUser} />
            <Input placeholder="Last Name" />
          </InputsWrapperItem>
          <InputsWrapperItem>
            <FontAwesomeIcon icon={faUser} />
            <Input placeholder="Email" />
          </InputsWrapperItem>
        </InputsWrapper>
      </Form>
    </Background>
  );
};

export default Home;