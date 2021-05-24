import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout/layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();

	// Functionality to detect browser and edit CSS styles based on browser.

	// function detectBrowser() {
	// 	const N = navigator.appName;
	// 	const UA = navigator.userAgent;
	// 	let temp;
	// 	const browserVersionRegex = UA.match(
	// 		/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i
	// 	);
	// 	// eslint-disable-next-line no-useless-escape
	// 	if (browserVersionRegex && (temp = UA.match(/version\/([\.\d]+)/i)) != null)
	// 		browserVersionRegex[2] = temp[1];
	// 	const browserVersion = browserVersionRegex
	// 		? 'Browser:' +
	// 		  [browserVersionRegex[1] + '\n Version:' + browserVersionRegex[2]]
	// 		: [N, navigator.appVersion, '-?'];
	// 	return browserVersion;
	// }

	useEffect(() => {
		// const browser = detectBrowser();
		// if (browser !== 'Firefox') {
		// 	document.querySelector('html').style.scrollBehavior = 'smooth';
		// }

		const handleRouteChange = () => {
			window.scroll({
				top: 1,
				left: 0,
				behavior: 'smooth',
			});
		};

		router.events.on('routeChangeComplete', handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method:
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	});
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
