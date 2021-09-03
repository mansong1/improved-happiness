import { html } from 'common-tags';
import styled, { createGlobalStyle, CSSProp } from 'styled-components';
import bgImage from '../assets/bg.jpg';

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        width: 100vw;
        height: 100vh;
        font-size: 16px;
        overflow: hidden;
    }
`;

const Background = styled.div`
    background-image: url(${bgImage});
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

const Form = styled.form`
    width: 90%;
    height: 80%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &::after {
        content: '';
        background-image: url(${bgImage});
        background-size: cover;
        background-position: left;
        background-repeat: no-repeat;
        posion: absolute;
        width: 100vw;
        height: 100vh;
        filter: blur(0.8125em);
    }
`;

const InputsWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    z-index: 1;
`

const InputsWrapperItem = styled.div`
    width: 60%;
    display: flex;
`

export { GlobalStyle, Background, Form, InputsWrapper, InputsWrapperItem };