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

	@media (min-width: 48em) {
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
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	transition: height ${transitionTime};
	text-transform: uppercase;
	letter-spacing: 0.4rem;

	@media only screen and (max-width: 620px) {
		width: 85vw;
		height: 80vh;
		hr {
			margin-bottom: 0.3rem;
		}
		h4 {
			font-size: small;
		}
	}
	@media only screen and (max-width: 350px) {
		width: 90vw;
		height: 90vh;
		display: flex;
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

		@media (min-width: 48em) {
			background-position: center;
		}
	}
`;

const FormTitle = styled.h2`
    margin: 3rem 0 2rem 0;
`;
const Gridbox = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 40px;
	align-items: center;
	@media (max-width: 1190px) {
		grid-template-columns: 1fr;
	}
`;
const InputsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	z-index: 1;
`;

const boarderProp = '0.0625em solid black';
const setNone = 'none';

const InputsWrapperItem = styled.div`
    display: flex;
    border-bottom: ${props =>
		props.noUnderline ? `${setNone}` : `${boarderProp}`};
    padding-top: 2.5em;
`;

const Input = styled.input`
	text-decoration: none;
	background: none;
	border: none;
	outline: none;
	padding-left: 0.85em;
	padding-bottom: 0.5em;
	font-size: 1.25em;
	color: #3c354e;
	font-size: 1rem;
	font-weight: bold;
	transition: color ${transitionTime};

	@media (min-width: 48em) {
		color: white;
	}

	&::placeholder {
		color: #b9abe099;
		font-size: 1rem;
		transition: color ${transitionTime};

		@media (min-width: 48em) {
			color: #b9abe099;
		}

		@media (max-width: 600px) {
			width: 100%;
		}
	}
`;

const SubmitButton = styled.button`
	background: linear-gradient(to right, #7c3e9d 0%, #2a9dd9);
	text-transform: uppercase;
	letter-spacing: 0.2rem;
	transition: transform 200ms ease-in-out;

	padding: 16px 25px;
	border: none;
	color: white;
	border-radius: 2rem;
	justify-content: center;

	&:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
`;

export {
	GlobalStyle,
	Background,
	Form,
	FormTitle,
	InputsWrapper,
	InputsWrapperItem,
	SubmitButton,
	Input,
	Gridbox,
};