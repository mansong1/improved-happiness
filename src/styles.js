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
`;

export {
    GlobalStyle,
    Background
}