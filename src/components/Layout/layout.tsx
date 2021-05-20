import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import { ThemeContext } from '../../context/ThemeContext';
import Head from 'next/head';
import Footer from './Footer';

type LayoutPropTypes = {
	children: React.ReactNode;
};
export default function Layout({ children }: LayoutPropTypes): JSX.Element {
	const [theme, setTheme] = useState('theme-dark');

	const toggleTheme = () => {
		if (theme === 'theme-light') {
			setTheme('theme-dark');
		} else {
			setTheme('theme-light');
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
				{children}
				<Footer />
			</div>
		</ThemeContext.Provider>
	);
}
