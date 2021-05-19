module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// primary for text secondary for background, accent for primary accent, muted for secondary action
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				accent: 'var(--color-accent)',
				muted: 'var(--color-muted)',
				hoverCol: 'var(--color-hover)',
			},
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
