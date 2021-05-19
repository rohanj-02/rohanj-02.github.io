import React from 'react';

export const ThemeContext = React.createContext({
	theme: 'theme-dark',
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toggleTheme: () => {},
});
