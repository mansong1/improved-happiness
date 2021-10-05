import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useLocalStorage } from './useLocalStorage';

import {
    GlobalStyle,
    Background,
    Form,
    InputsWrapper,
    InputsWrapperItem,
    Input,
    SubmitButton,
  } from "./styles";


function Home() {

  let history = useHistory();

  const [first_name, setFirstName] = useLocalStorage('first_name', '');
  const [last_name, setLastName] = useLocalStorage('last_name', '');
  const [email, setEmail] =  useLocalStorage('email', '');

  const handleSubmit= e => {
    e.preventDefault();
    history.push('/gesture-recognition');
  };

  return (
    <React.Fragment>
    <GlobalStyle />
    <Background>
        <Form onSubmit={handleSubmit}>
            <InputsWrapper>
            <InputsWrapperItem>
                <FontAwesomeIcon icon={faUser} />
                <Input type="text" required placeholder="First Name" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
            </InputsWrapperItem>
            <InputsWrapperItem>
                <FontAwesomeIcon icon={faUser} />
                <Input type="text" required placeholder="Last Name" value={last_name} onChange={(e) => setLastName(e.target.value)}/>
            </InputsWrapperItem>
            <InputsWrapperItem>
                <FontAwesomeIcon icon={faEnvelope} />
                <Input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
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