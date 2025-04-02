import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface Props {
	children: JSX.Element;
	open: boolean;
	setOpen: (param: boolean) => void;
}

export default function Modal({ open, setOpen, children }: Props): JSX.Element {
	const controls = useAnimation();

	useEffect(() => {
		controls.start(open ? 'visible' : 'hidden');
	}, [open]);

	const handleEscape = (e: KeyboardEvent): void => {
		if (e.key === 'Escape') {
			setOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleEscape);
		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	});

	return (
		<motion.div
			className={`fixed z-1000 inset-0 overflow-y-auto text-secondary ${
				open ? 'block' : 'hidden'
			}`}
			initial="hidden"
			variants={{
				hidden: {
					opacity: 0,
				},
				visible: {
					opacity: 1,
					transition: { delay: 0.1, duration: 0.4 },
				},
			}}
			animate="visible"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
		>
			<motion.div
				className={`items-end justify-center min-h-screen text-center p-0 ${
					open ? 'block' : 'hidden'
				}`}
			>
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
					onClick={() => setOpen(false)}
					className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
					aria-hidden="true"
				></div>
				{/* <!-- This element is to trick the browser into centering the modal contents. --> */}
				<span className="inline-block align-middle h-screen" aria-hidden="true">
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
				<motion.div
					initial="hidden"
					variants={{
						hidden: {
							y: '5rem',
						},
						visible: {
							y: '0rem',
							transition: { duration: 0.2 },
						},
					}}
					animate="visible"
					className="inline-block bg-primary rounded-lg text-left overflow-hidden shadow-xl transform transition-all align-middle max-h-screen-4/5 w-4/5 p-12 md:p-16 lg:p-20"
					style={{ height: '80vh' }}
				>
					<span
						className="absolute top-0 right-0 p-4 drop-shadow-md overflow-visible opacity-70 hover:opacity-100 transition-opacity duration-200"
						onClick={() => setOpen(false)}
					>
						<svg
							className="h-12 w-12 fill-current overflow-visible "
							role="button"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<defs>
								<filter id="shadow">
									<feDropShadow
										dx="0.2"
										dy="0.7"
										stdDeviation="0.4"
										floodColor="gray"
									/>
								</filter>
							</defs>
							<title>Close</title>
							<path
								filter="url(#shadow)"
								d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
							/>
						</svg>
					</span>
					{children}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
