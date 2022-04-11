import React from 'react';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUserLarge } from '@fortawesome/free-solid-svg-icons';

import { useLocalStorage } from './useLocalStorage';
import {
	GlobalStyle,
	Background,
	Form,
	InputsWrapper,
	InputsWrapperItem,
	Input,
	SubmitButton,
	Gridbox,
} from './styles';

function Home({ url }) {
	let navigate = useNavigate();
	const [src, setSrc] = useState('');

	useEffect(() => {
		if (!isMobile) {
			QRCode.toDataURL(url).then((data) => {
				setSrc(data);
			});
		}
	}, []);

	const [first_name, setFirstName] = useLocalStorage('first_name', '');
	const [last_name, setLastName] = useLocalStorage('last_name', '');
	const [email, setEmail] = useLocalStorage('email', '');

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/gesture-recognition');
	};

	return (
		<React.Fragment>
			<GlobalStyle />
			<Background>
				<Form onSubmit={handleSubmit}>
					<Gridbox>
						<InputsWrapper>
							<InputsWrapperItem>
								<FontAwesomeIcon icon={faUserLarge} />
								<Input
									type='text'
									required
									placeholder='First Name'
									value={first_name}
									onChange={(e) => setFirstName(e.target.value)}
								/>
							</InputsWrapperItem>
							<InputsWrapperItem>
								<FontAwesomeIcon icon={faUserLarge} />
								<Input
									type='text'
									required
									placeholder='Last Name'
									value={last_name}
									onChange={(e) => setLastName(e.target.value)}
								/>
							</InputsWrapperItem>
							<InputsWrapperItem>
								<FontAwesomeIcon icon={faEnvelope} />
								<Input
									type='email'
									required
									placeholder='Email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</InputsWrapperItem>
							<InputsWrapperItem noUnderline={true}>
								<SubmitButton type='submit'>Submit</SubmitButton>
							</InputsWrapperItem>
						</InputsWrapper>
						<InputsWrapper>
							<img src={src} alt='' />
						</InputsWrapper>
					</Gridbox>
				</Form>
			</Background>
		</React.Fragment>
	);
}

export default Home;
