import { useState } from 'react';
import MobileNavbar from './MobileNavbar.js';
import ToggleButton from '../ToggleButton';

export default function Navbar(props) {
	const [minifyNavbar, setMinifyNavbar] = useState(false);
	const [openMobileNav, setOpenMobileNav] = useState(false);
	function toggleMobileNav(e) {
		setOpenMobileNav(!openMobileNav);
	}
	function scrollFunction(e) {
		if (
			document.body.scrollTop > 80 ||
			document.documentElement.scrollTop > 80
		) {
			setMinifyNavbar(true);
		} else {
			setMinifyNavbar(false);
		}
	}
	const navItems = [
		{
			link: '/',
			name: 'Home',
		},
		{
			link: '/',
			name: 'About',
		},
		{
			link: '/',
			name: 'Projects',
		},
		{
			link: '/',
			name: 'Anything',
		},
	];
	return (
		<nav className="bg-primary px-8 flex justify-between text-secondary">
			<div className="flex flex-1">
				<div id="logo" className="flex h-20 items-center flex-shrink-0">
					<img
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2634840.jpg&f=1&nofb=1"
						className="block h-8 w-auto"
					/>
				</div>
				<div className="flex h-20 items-stretch content-center align-middle">
					{navItems.map((item, index) => (
						<a
							href={item.link}
							key={index}
							className="flex py-auto px-4 hover:bg-gray-500">
							<div className="my-auto">{item.name}</div>
						</a>
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
