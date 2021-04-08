import React from 'react';
import Navbar from './navbar/Navbar';

type LayoutPropTypes = {
	children: JSX.Element[];
};
export default function Layout({ children }: LayoutPropTypes): JSX.Element {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
