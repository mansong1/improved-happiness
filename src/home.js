import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { 
  Background, 
  GlobalStyle,
  Form,
  FormTitle,
  InputsWrapper,
  InputsWrapperItem,
  Input,
  SubmitButton,
} from "./styles";

const Home = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
    <Background>
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
            <FontAwesomeIcon icon={faEnvelope} />
            <Input placeholder="Email" />
          </InputsWrapperItem>
          <InputsWrapperItem noUnderline={true}>
            <SubmitButton>
              Submit
              </SubmitButton>
          </InputsWrapperItem>
        </InputsWrapper>
      </Form>
    </Background>
    </React.Fragment>
  );
};

export default Home;