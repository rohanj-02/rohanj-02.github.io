import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import { ThemeContext } from '../../context/ThemeContext';
import Head from 'next/head';
import Footer from './Footer';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

type LayoutPropTypes = {
	children: React.ReactNode;
};
export default function Layout({ children }: LayoutPropTypes): JSX.Element {
	const [theme, setTheme] = useState('');
	useEffect(() => {
		const storedTheme = window.localStorage.getItem('theme_preference');
		if (storedTheme) {
			setTheme(storedTheme);
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
			setTheme(themePreference);
		}
	}, []);
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
		'Software Engineer specializing in distributed systems and scalable architecture. Experienced in building high-performance microservices, optimizing system reliability, and designing resilient cloud-native solutions that handle millions of daily requests.';
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className={theme + ' bg-primary text-secondary'}>
				<Head>
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
						content={`${process.env.PUBLIC_URL}`}
						key="ogurl"
					/>
					<meta
						property="og:image"
						content="/images/rj-logo.webp"
						key="ogimage"
					/>
					<meta
						property="og:image:secure_url"
						content={`${process.env.PUBLIC_URL}/images/rj-logo.webp`}
					/>
					<meta property="og:image:type" content="image/webp" />
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
				<Analytics />
				<SpeedInsights />
			</div>
		</ThemeContext.Provider>
	);
}
