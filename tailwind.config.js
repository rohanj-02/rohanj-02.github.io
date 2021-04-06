module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'primary-dark': '#0e0e0e',
				'primary-light': '#e0e0e0',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
