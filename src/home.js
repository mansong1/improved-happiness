import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
    GlobalStyle,
    Background,
    Form,
    FormTitle,
    InputsWrapper,
    InputsWrapperItem,
    Input,
    SubmitButton,
  } from "./styles";

function Home() {
  return (
    <React.Fragment>
    <GlobalStyle />
    <Background>
        <Form>
            <InputsWrapper>
            <InputsWrapperItem>
                <FontAwesomeIcon icon={faUser} />
                <Input type="text" required placeholder="First Name" />
            </InputsWrapperItem>
            <InputsWrapperItem>
                <FontAwesomeIcon icon={faUser} />
                <Input type="text" required placeholder="Last Name" />
            </InputsWrapperItem>
            <InputsWrapperItem>
                <FontAwesomeIcon icon={faEnvelope} />
                <Input type="email" required placeholder="Email" />
            </InputsWrapperItem>
            <InputsWrapperItem noUnderline={true}>
                <SubmitButton type="submit" >
                Submit
                </SubmitButton>
            </InputsWrapperItem>
            </InputsWrapper>
        </Form>
    </Background>
    </React.Fragment>
  );
}

export default Home;

// import FormDataComponent from './components/form_data.component';

// function Home(){

//   return (
//       <FormDataComponent/>
//   );
// };