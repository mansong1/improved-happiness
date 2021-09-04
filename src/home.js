import React from 'react';
import { useHistory } from 'react-router-dom';
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

function Home(){
  
  const history = useHistory();

  const handleClick = () => {
    history.push('/gesture-recognition');
  };

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
            <SubmitButton onClick={handleClick}>
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