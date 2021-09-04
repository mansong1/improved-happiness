import { html } from 'common-tags';
import styled, { createGlobalStyle, css, CSSProp } from 'styled-components';
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

const bg_css = css`
    background-image: url(${bgImage});
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
`;

const transitionTime = `500ms`;

const Background = styled.div`
    ${bg_css}
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    trastition: background-position ${transitionTime};

    @media (min-width: 48.0em) {
        background-position: center;
    }
`;

const Form = styled.form`
    width: 90%;
    height: 80%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: height ${transitionTime};

    @media (min-width: 48.0em) {
        height: 50%;
    }

    &::after {
        content: '';
        ${bg_css}
        position: absolute;
        width: 100vw;
        height: 100vh;
        filter: blur(0.8125em);
        trastition: background-position ${transitionTime};
        
        @media (min-width: 48.0em) {
            background-position: center;
        }
        
    }
`;

const InputsWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    z-index: 1;
`;

const InputsWrapperItem = styled.div`
    width: 60%;
    display: flex;
    border-bottom: ${props => props.noUnderline ? `none` : `0.0625em solid black`};
    padding-top: 1.5em;
`;

const Input = styled.input`
    text-decoration: none;
    background: none;
    border: none;
    outline: none;
    padding-left: 0.5em;
    padding-bottom: .5em;
    font-size: 1.25em;
    color: black;
    transition: color ${transitionTime};

    @media (min-width: 48.0em) {
        color: white;
    }

    &::placeholder {
        color: rgba(0,0,0,.8)
        transition: color ${transitionTime};

        @media (min-width: 48.0em) {
            color: lightgray;
        }
    }
`;

const Submit = styled(Input)`
    margin-left: .5em;
    transition: transform 200ms ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`

export { GlobalStyle, 
    Background, 
    Form, 
    InputsWrapper, 
    InputsWrapperItem, 
    Submit 
};