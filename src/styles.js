import styled, { createGlobalStyle, css } from 'styled-components';
import bgImage from './images/bg.png';

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
    transition: background-position ${transitionTime};

    @media (min-width: 48.0em) {
        background-position: center;
    }
`;

const Form = styled.form`
    width: 50vw;
    height: 80vh;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
    transition: height ${transitionTime};
    text-transform: uppercase;
    letter-spacing: 0.4rem;

    @media only screen and (max-width: 320px) {
        width: 80vw;
        height: 90vh;
        hr {
          margin-bottom: 0.3rem;
        }
        h4 {
          font-size: small;
        }
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

const FormTitle = styled.h2`
    margin: 3rem 0 2rem 0;
`;

const InputsWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20%;
    z-index: 1;
`;

const InputsWrapperItem = styled.div`
    width: 60%;
    display: flex;
    border-bottom: ${props => props.noUnderline ? `none` : `0.0625em solid black`};
    padding-top: 2.5em;
`;

const Input = styled.input`
    text-decoration: none;
    background: none;
    border: none;
    outline: none;
    padding-left: 0.85em;
    padding-bottom: .5em;
    font-size: 1.25em;
    color: #3c354e;
    font-size: 1rem;
    font-weight: bold;
    transition: color ${transitionTime};

    @media (min-width: 48.0em) {
        color: black;
    }

    &::placeholder {
        color: #b9abe099;
        font-size: 1rem;
        transition: color ${transitionTime};

        @media (min-width: 48.0em) {
            color: #b9abe099;
        }
    }
`;

const SubmitButton = styled.button`
    background: linear-gradient(to right, #12c2e9 0%, #c471ed);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    transition: transform 200ms ease-in-out;
    width: 50%;
    height: 3rem;
    border: none;
    color: white;
    border-radius: 2rem;
    justify-content: center;
    position: relative;
    left: 50%;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

`;

export { GlobalStyle,
    Background,
    Form,
    FormTitle,
    InputsWrapper,
    InputsWrapperItem,
    SubmitButton,
    Input
};