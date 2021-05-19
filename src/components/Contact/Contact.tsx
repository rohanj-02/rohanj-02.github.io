import React from 'react';
import { motion } from 'framer-motion';

export default function Contact(): JSX.Element {
	return (
		<div
			id="contact-me"
			className="bg-primary text-secondary flex flex-col items-center justify-center p-4 flex-1"
			style={{ scrollMarginTop: '5rem' }}>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={{
					hidden: {
						x: '-6rem',
						opacity: 0,
						scale: 0.6,
					},
					visible: {
						x: '0rem',
						opacity: 1,
						scale: 1,
						transition: {
							delay: 0.2,
						},
					},
				}}
				className="mx-4 mt-16 mb-8 p-4">
				<h1 className="font-semibold text-4xl">Contact</h1>
			</motion.div>
			<div className="container max-w-4xl m-2 p-2 flex flex-col items-center justify-center">
				<div
					className="m-4 p-8 w-full sm:w-3/4"
					style={{ background: 'rgba(255,255,255,0.1)' }}>
					<form>
						<label htmlFor="name" className="m-2">
							Name
						</label>
						<br />
						<input
							id="name"
							name="name"
							type="text"
							className="m-2 px-4 w-full py-2 text-secondary bg-muted"
						/>
						<br />
						<br />
						<label htmlFor="message" className="m-2 mt-4">
							Message
						</label>
						<br />
						<input
							id="message"
							name="message"
							type="textarea"
							className="m-2 px-4 w-full py-2 text-secondary bg-muted"
						/>
						<br />
						<br />
					</form>
				</div>
				<button
					type="submit"
					className="px-4 py-2 bg-accent m-2 text-secondary">
					Submit
				</button>
			</div>
		</div>
	);
}
