import React from 'react';
import Section from '../Layout/Section';
import FadeInWhenVisible from '../utils/FadeInWhenVisible';
import { motion } from 'framer-motion';

export default function Contact(): JSX.Element {
	const email = 'rohan.jain02@gmail.com';
	const subject = 'Hello from your portfolio website';
	const mailtoUrl = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}`;

	return (
		<Section title="Contact" id="contact-me">
			<FadeInWhenVisible classNames="sm:container max-w-4xl m-2 p-2 flex flex-col items-center justify-center">
				<div className="text-center mb-8">
					<p className="text-xl mb-6">
						I&apos;m always open to new opportunities and interesting projects.{' '}
						<br></br>
						Feel free to reach out!
					</p>
				</div>

				<motion.div
					className="flex flex-col items-center gap-6"
					whileHover={{ scale: 1.05 }}
					transition={{ type: 'spring', stiffness: 400, damping: 10 }}
				>
					<a
						href={mailtoUrl}
						className="flex items-center gap-3 px-8 py-4 bg-accent text-secondary rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg font-medium"
						rel="noopener noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
							/>
						</svg>
						Send me an email
					</a>
				</motion.div>

				<div className="mt-8 text-center text-gray-400">
					<p>Or connect with me on social media using the links above.</p>
				</div>
			</FadeInWhenVisible>
		</Section>
	);
}
