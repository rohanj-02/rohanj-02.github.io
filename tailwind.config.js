const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		zIndex: {
			0: 0,
			10: 10,
			20: 20,
			30: 30,
			40: 40,
			50: 50,
			1000: 1000,
			auto: 'auto',
		},
		extend: {
			transitionDuration: {
				400: '400ms',
			},
			colors: {
				// primary for text secondary for background, accent for primary accent, muted for secondary action
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				accent: 'var(--color-accent)',
				muted: 'var(--color-muted)',
				hoverCol: 'var(--color-hover)',
				placeholderCol: 'var(--color-placeholder)',
				green: colors.emerald,
				yellow: colors.amber,
				purple: colors.violet,
				current: 'currentColor',
				// darkestHue: 'rgb(9, 11, 15)',
				// darkestHue: 'rgba(13, 17, 24, 0.87)',
			},
			maxWidth: {
				'screen-4/5': '80vw',
			},
		},
		minHeight: {
			0: '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			24: '6rem',
			48: '12rem',
			64: '16rem',
			full: '100%',
			'screen/2': '80vh',
		},
		minWidth: {
			48: '12rem',
		},
		maxHeight: {
			'screen/2': '66vh',
			screen: '100vh',
			'screen-4/5': '80vh',
			'screen-9/10': '90vh',
			22: '5.5rem',
		},
		fontFamily: {
			sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
