// import { useState } from 'react';
// import MobileNavbar from './MobileNavbar.jsx';
import ToggleButton from '../ToggleButton';
import Link from 'next/link';

export default function Navbar(): JSX.Element {
	// const [minifyNavbar, setMinifyNavbar] = useState(false);
	// const [openMobileNav, setOpenMobileNav] = useState(false);
	// function toggleMobileNav(e) {
	// 	setOpenMobileNav(!openMobileNav);
	// }
	// function scrollFunction(e) {
	// 	if (
	// 		document.body.scrollTop > 80 ||
	// 		document.documentElement.scrollTop > 80
	// 	) {
	// 		setMinifyNavbar(true);
	// 	} else {
	// 		setMinifyNavbar(false);
	// 	}
	// }
	const navItems = [
		{
			link: '/',
			name: 'About Me',
		},
		{
			link: '/',
			name: 'Projects',
		},
		{
			link: '/',
			name: 'Statistics',
		},
		{
			link: '/',
			name: 'Contact',
		},
	];
	return (
		<nav className="bg-primary px-8 flex justify-between text-secondary fixed top-0 left-0 w-full">
			<div className="flex flex-1">
				<div id="logo" className="flex h-20 items-center flex-shrink-0">
					<img src="images/rj-logo.svg" className="block h-12 w-auto" />
				</div>
				<div className="flex h-20 items-stretch content-center align-middle">
					{navItems.map((item, index) => (
						<Link href={item.link} key={index}>
							<a className="flex py-auto px-4 hover:bg-gray-500">
								<div className="my-auto">{item.name}</div>
							</a>
						</Link>
					))}
				</div>
			</div>
			<div className="flex h-20 items-stretch content-center align-middle">
				<div id="toggle-button">
					<ToggleButton />
				</div>
			</div>
		</nav>
	);
}
