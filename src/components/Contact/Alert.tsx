import React from 'react';
interface Props {
	status: string;
	message: string;
}

export default function Alert(props: Props): JSX.Element {
	const { status, message } = props;
	let classNames = '';
	// let classNameButton = '';
	switch (status) {
		case 'error':
			classNames = 'bg-red-100 border-red-400 text-red-400';
			// classNameButton = 'text-red-500';
			break;
		case 'success':
			classNames = 'bg-green-100 border-green-400 text-green-400';
			// classNameButton = 'text-green-500';
			break;
		case 'info':
			classNames = 'bg-blue-100 border-blue-400 text-blue-400';
			// classNameButton = 'text-blue-500';
			break;
	}

	return (
		<div
			className={
				classNames +
				' px-4 py-3 rounded border-2 relative w-full m-2 bg-opacity-30'
			}
			role="alert">
			{/* <strong className="font-bold">Holy smokes!</strong> */}
			<span className="block sm:inline">{message}</span>
			{/* <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
				<svg
					className={'fill-current h-6 w-6 ' + classNameButton}
					role="button"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20">
					<title>Close</title>
					<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
				</svg>
			</span> */}
		</div>
	);
}
