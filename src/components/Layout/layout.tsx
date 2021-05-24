import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import { ThemeContext } from '../../context/ThemeContext';
import Head from 'next/head';
import Footer from './Footer';

type LayoutPropTypes = {
	children: React.ReactNode;
};
export default function Layout({ children }: LayoutPropTypes): JSX.Element {
	const [theme, setTheme] = useState('');
	useEffect(() => {
		if (window.localStorage.getItem('theme_preference')) {
			setTheme(window.localStorage.getItem('theme_preference'));
		} else {
			// Code for system preference
			// const compStyles = window.getComputedStyle(
			// 	document.querySelector('.themed')
			// );
			// const themePreference =
			// 	compStyles.getPropertyValue('background-color') == 'rgb(255, 255, 255)'
			// 		? 'theme-light'
			// 		: 'theme-dark';
			const themePreference = 'theme-dark';
			window.localStorage.setItem('theme_preference', themePreference);
			setTheme(window.localStorage.getItem('theme_preference'));
		}
	});
	const toggleTheme = () => {
		if (theme === 'theme-light') {
			setTheme('theme-dark');
			window.localStorage.setItem('theme_preference', 'theme-dark');
		} else {
			setTheme('theme-light');
			window.localStorage.setItem('theme_preference', 'theme-light');
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className={theme + ' bg-primary text-secondary'}>
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<title>Rohan Jain</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Navbar />
				<div className="themed hidden"></div>
				{children}
				<Footer theme={theme} />
			</div>
		</ThemeContext.Provider>
	);
}
