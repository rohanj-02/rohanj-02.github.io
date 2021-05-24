import React from 'react';
import { motion } from 'framer-motion';

interface Props {
	children: JSX.Element;
	open: boolean;
	setOpen: (param: boolean) => void;
}

export default function Modal(props: Props): JSX.Element {
	// eslint-disable-next-line no-console
	console.log(props);
	return (
		<div
			className="fixed z-1000 inset-0 overflow-y-auto"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true">
			<motion.div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				{/* <!--
				Background overlay, show/hide based on modal state.
	
				Entering: "ease-out duration-300"
					From: "opacity-0"
					To: "opacity-100"
				Leaving: "ease-in duration-200"
					From: "opacity-100"
					To: "opacity-0"
			--> */}
				<div
					className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
					aria-hidden="true"></div>

				{/* <!-- This element is to trick the browser into centering the modal contents. --> */}
				<span
					className="inline-block align-middle h-screen min-h-screen/2 max-h-screen/2 sm:min-h-0 sm:max-h-screen"
					aria-hidden="true">
					&#8203;
				</span>

				{/* <!--
				Modal panel, show/hide based on modal state.
	
				Entering: "ease-out duration-300"
					From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					To: "opacity-100 translate-y-0 sm:scale-100"
				Leaving: "ease-in duration-200"
					From: "opacity-100 translate-y-0 sm:scale-100"
					To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
			--> */}
				<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-screen-4/5 max-h-screen-4/5">
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					hello
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					<br />
					<hr />
					<br />
					hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
				</div>
			</motion.div>
		</div>
	);
}
