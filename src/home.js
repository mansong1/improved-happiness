import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
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

  let history = useHistory();

  const [first_name, setFirstName] = React.useState('');
  const [last_name, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');

  localStorage.setItem('first_name', JSON.stringify(first_name), [first_name]);
  localStorage.setItem('last_name', JSON.stringify(last_name), [last_name]);
  localStorage.setItem('email', JSON.stringify(email), [email]);

  function handleSubmit() {
    history.push('/gesture-recognition');
  }

  return (
    <React.Fragment>
    <GlobalStyle />
    <Background>
        <Form>
            <InputsWrapper>
            <InputsWrapperItem>
                <FontAwesomeIcon icon={faUser} />
                <Input type="text" required placeholder="First Name" onChange={ (e) => setFirstName(e.target.value) } />
            </InputsWrapperItem>
            <InputsWrapperItem>
                <FontAwesomeIcon icon={faUser} />
                <Input type="text" required placeholder="Last Name" onChange={ (e) => setLastName(e.target.value) }/>
            </InputsWrapperItem>
            <InputsWrapperItem>
                <FontAwesomeIcon icon={faEnvelope} />
                <Input type="email" required placeholder="Email" onChange={ (e) => setEmail(e.target.value) }/>
            </InputsWrapperItem>
            <InputsWrapperItem noUnderline={true}>
                <SubmitButton type="submit" onClick={handleSubmit} >
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