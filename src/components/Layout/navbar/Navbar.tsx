import ToggleButton from '../../ToggleButton';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef(null);
	const controls = useAnimation();

	function handleClick() {
		setIsOpen(!isOpen);
		controls.start(isOpen ? 'hidden' : 'visible');
	}

	function universalClick(e) {
		if (ref.current && !ref.current.contains(e.target)) {
			setIsOpen(false);
			controls.start('hidden');
		}
	}

	function scrollFunction() {
		if (
			document.body.scrollTop > 80 ||
			document.documentElement.scrollTop > 80
		) {
			document.getElementById('navbar').style.height = '5rem';
			document.getElementById('navbar').classList.add('shadow-lg');
			document.getElementById('navbar').classList.add('bg-primary');
		} else {
			document.getElementById('navbar').style.height = '7rem';
			document.getElementById('navbar').classList.remove('shadow-lg');
			document.getElementById('navbar').classList.remove('bg-primary');
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollFunction);
		window.addEventListener('click', universalClick);
		document.getElementById('navbar').style.height = '7rem';
		return () => {
			window.removeEventListener('scroll', scrollFunction);
			window.removeEventListener('click', universalClick);
		};
	}, []);
	const navItems = [
		{
			link: '/#about-me',
			name: 'About Me',
		},
		{
			link: '/projects',
			name: 'Projects',
		},
		// {
		// 	link: '/#statistics',
		// 	name: 'Statistics',
		// },
		{
			link: '/#contact-me',
			name: 'Contact',
		},
	];
	const navClass = 'px-8 flex justify-between text-secondary';

	return (
		<div className="fixed top-0 left-0 w-full z-50">
			<nav className={navClass} id="navbar" style={{ transition: '0.4s' }}>
				<div className="flex flex-1">
					<div id="logo" className="flex items-center flex-shrink-0">
						<Link href="/#">
							<a>
								<img src="/images/rj-logo.svg" className="block h-12 w-auto" />
							</a>
						</Link>
					</div>
					<div
						id=""
						className="hidden sm:flex items-stretch content-center align-middle transition duration-400">
						{navItems.map((item, index) => (
							<Link href={item.link} key={index}>
								<a className="flex py-auto px-4 hover:bg-hoverCol">
									<div className="my-auto">{item.name}</div>
								</a>
							</Link>
						))}
					</div>
				</div>
				<div className="hidden sm:flex items-stretch content-center align-middle">
					<div id="toggle-button">
						<ToggleButton />
					</div>
				</div>
				<button
					type="button"
					className={`block sm:hidden ${styles.menuBtn} ${
						isOpen ? `${styles.opened} aria-expanded` : ''
					}`}
					onClick={handleClick}
					ref={ref}>
					<svg className="h-8 w-8 fill-current" viewBox="0 0 100 100">
						<path
							className={`${styles.line} ${styles.line1}`}
							d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
						/>
						<path
							className={`${styles.line} ${styles.line2}`}
							d="M 20,50 H 80"
						/>
						<path
							className={`${styles.line} ${styles.line3}`}
							d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
						/>
					</svg>
				</button>
			</nav>
			<motion.div
				initial="hidden"
				animate={controls}
				variants={{
					hidden: { opacity: 0, y: '-20rem' },
					visible: { opacity: 1, y: '0rem' },
				}}
				className={`shadow-lg bg-primary pb-5 ${isOpen ? 'block' : 'hidden'}`}>
				{navItems.map((item, index) => (
					<Link href={item.link} key={index}>
						<a className="flex py-2 px-4 bg-primary hover:bg-hoverCol">
							<div className="my-1 mx-2">{item.name}</div>
						</a>
					</Link>
				))}
				<div className="bg-primary p-2 pb-4 pl-4">
					<div id="toggle-button">
						<ToggleButton />
					</div>
				</div>
			</motion.div>
		</div>
	);
}
