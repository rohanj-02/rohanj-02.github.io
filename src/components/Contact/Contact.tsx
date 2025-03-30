import React from 'react';
import { useState } from 'react';
import Section from '../Layout/Section';
import FadeInWhenVisible from '../utils/FadeInWhenVisible';
import axios from 'axios';
import Alert from './Alert';
import Loader from './Loader';

export default function Contact(): JSX.Element {
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [response, setResponse] = useState('');
	const [responseState, setResponseState] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (): void => {
		if (name === '' || message == '') {
			setResponse('Please fill all the fields!');
			setResponseState('error');
			return;
		}

		setIsLoading(true);
		axios
			.post('/api/mail', {
				name: name,
				message: message,
			})
			.then(res => {
				setIsLoading(false);
				setResponse(res?.data?.message);
				setResponseState(res.status === 200 ? 'success' : 'error');
				// console.log('Response', res);
			})
			.catch(err => {
				setIsLoading(false);
				setResponse(err?.response?.data?.errmess);
				setResponseState('error');
				// eslint-disable-next-line no-console
				console.log('Error', err);
			});
	};

	return (
		<Section title="Contact" id="contact-me">
			<FadeInWhenVisible classNames="sm:container max-w-4xl m-2 p-2 flex flex-col items-center justify-center">
				<div
					className="m-4 p-8 w-full"
					style={{ background: 'rgba(255,255,255,0.1)' }}
				>
					<form className="flex flex-col">
						<div className="m-2 mb-3 pt-0">
							<input
								type="text"
								placeholder="Name"
								id="name"
								required
								name="name"
								value={name}
								onChange={e => setName(e.target.value)}
								className="px-3 py-3 placeholder-placeholderCol text-secondary relative bg-muted rounded text-sm border-0 focus:ring-secondary focus:ring-2 shadow outline-none focus:outline-none w-full"
							/>
						</div>
						<div className="m-2 pt-0">
							<textarea
								placeholder="Message"
								id="message"
								required
								value={message}
								onChange={e => setMessage(e.target.value)}
								name="message"
								className="h-24 px-3 py-3 placeholder-placeholderCol text-secondary relative bg-muted rounded text-sm border-0 focus:ring-secondary focus:ring-2 shadow outline-none focus:outline-none w-full"
							/>
						</div>
					</form>
				</div>
				{!isLoading && responseState && (
					<Alert status={responseState} message={response} />
				)}
				<button
					type="submit"
					disabled={isLoading}
					onClick={handleSubmit}
					className="w-full flex sm:w-1/2 md:w-1/4 px-4 py-2 bg-accent m-2 mt-3 text-secondary justify-center items-center"
				>
					{isLoading ? <Loader /> : 'Submit'}
				</button>
			</FadeInWhenVisible>
		</Section>
	);
}
