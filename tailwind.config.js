module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
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
				// darkestHue: 'rgb(9, 11, 15)',
				// darkestHue: 'rgba(13, 17, 24, 0.87)',
			},
		},
		minHeight: {
			0: '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			48: '12rem',
			64: '16rem',
			full: '100%',
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
