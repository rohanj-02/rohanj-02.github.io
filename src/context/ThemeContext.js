import React from 'react';

export const ThemeContext = React.createContext({
	theme: 'theme-light',
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toggleTheme: () => {},
});
