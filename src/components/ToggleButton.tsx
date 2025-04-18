import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ToggleButton(): JSX.Element {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const isLight = theme === 'theme-light';

	return (
		<div className="w-full h-full flex flex-col justify-center ">
			<div className="flex">
				<span className="">
					<svg
						className="h-6 w-6 text-secondary"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
						/>
					</svg>
				</span>
				<div
					className={
						(isLight ? 'bg-gray-300' : 'bg-accent') +
						' w-14 h-7 flex items-center cursor-pointer rounded-full mx-3 px-1'
					}
					onClick={toggleTheme}
				>
					<div
						className={
							(isLight ? 'translate-x-0' : 'translate-x-7') +
							' bg-white w-5 h-5 rounded-full shadow-md transform'
						}
					></div>
				</div>
				<span className="">
					<svg
						className="h-6 w-6 text-secondary"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
						/>
					</svg>
				</span>
			</div>
		</div>
	);
}
