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

	const pageTitle = 'Rohan Jain';
	const description =
		"This is Rohan Jain's portfolio page. He is a fulls tack web developer currently studying in IIITD and workinga s a frontend developer for Memboro. He is familiar with the MERN stack, Svelte, Nextjs, Svelte, Flask and Django.";
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className={theme + ' bg-primary text-secondary'}>
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<title>{pageTitle}</title>
					<link rel="icon" href="/favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta charSet="utf-8" />
					<meta property="og:title" content={pageTitle} key="ogtitle" />
					<meta property="og:description" content={description} key="ogdesc" />
					<meta name="description" content={description}></meta>
					<meta name="twitter:card" content="summary" key="twcard" />
					<meta
						property="og:url"
						content={`${process.env.NEXT_PUBLIC_URL}`}
						key="ogurl"
					/>
					<meta
						property="og:image"
						content="/images/rj-logo.svg"
						key="ogimage"
					/>
					<meta
						property="og:image:secure_url"
						content={`${process.env.NEXT_PUBLIC_URL}/images/rj-logo.svg`}
					/>
					<meta property="og:image:type" content="image/svg" />
					<meta property="og:image:width" content="512" />
					<meta property="og:image:height" content="512" />
					<meta property="og:image:alt" content="RJ Logo" />
					<meta
						property="og:site_name"
						content="Rohan Jain | Portfolio"
						key="ogsitename"
					/>
				</Head>

				<Navbar />
				<div className="themed hidden"></div>
				{children}
				<Footer theme={theme} />
			</div>
		</ThemeContext.Provider>
	);
}
