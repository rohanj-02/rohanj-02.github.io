import React from 'react';
import { useState } from 'react';
import Section from '../Layout/Section';
import FadeInWhenVisible from '../utils/FadeInWhenVisible';

export default function Contact(): JSX.Element {
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	return (
		<Section title="Contact" id="contact-me">
			<FadeInWhenVisible classNames="sm:container max-w-4xl m-2 p-2 flex flex-col items-center justify-center">
				<div
					className="m-4 p-8 w-full"
					style={{ background: 'rgba(255,255,255,0.1)' }}>
					<form className="flex flex-col">
						<div className="m-2 mb-3 pt-0">
							<input
								type="text"
								placeholder="Name"
								id="name"
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
								value={message}
								onChange={e => setMessage(e.target.value)}
								name="message"
								className="h-24 px-3 py-3 placeholder-placeholderCol text-secondary relative bg-muted rounded text-sm border-0 focus:ring-secondary focus:ring-2 shadow outline-none focus:outline-none w-full"
							/>
						</div>
					</form>
				</div>
				<button
					type="submit"
					className="w-full sm:w-1/2 md:w-1/4 px-4 py-2 bg-accent m-2 text-secondary">
					Submit
				</button>
			</FadeInWhenVisible>
		</Section>
	);
}
