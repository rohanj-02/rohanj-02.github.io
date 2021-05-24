import React from 'react';
import { FaFilePdf, FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import SocialLinks from '../Hero/SocialLinks';

function Footer({ theme }: { theme: string }): JSX.Element {
	const iconStyle = { fontSize: 20 };
	const arr = [
		{
			icon: <GrMail style={iconStyle} />,
			text: 'rohan19095@iiitd.ac.in',
			href: 'mailto:rohan19095@iiitd.ac.in',
		},
		{
			icon: <FaPhoneAlt style={iconStyle} />,
			text: '+917838492901',
			href: 'tel:+917838492901',
		},
		{
			icon: <FaFilePdf style={iconStyle} />,
			text: 'Download Resume',
			href: 'resume-rohanjain.pdf',
			download: true,
		},
	];
	const classes =
		theme === 'theme-dark'
			? 'bg-primary text-secondary'
			: 'bg-secondary text-primary';

	return (
		<footer className={classes + ' mt-10'}>
			<div className="flex justify-left md:justify-center align-middle">
				<div
					id="contact"
					className="flex flex-col flex-wrap md:flex-nowrap md:flex-row lg:w-1/2 md:w-3/4 sm:w-5/6 m-2 p-2">
					<div className="flex-grow m-2 p-2">
						{arr.map((elem, index) => (
							<a
								href={elem.href}
								key={index}
								className="mt-2 p-2 flex hover:text-accent transition duration-150"
								download={elem?.download}>
								<div className="mr-2">{elem.icon}</div>
								<div>{elem.text}</div>
							</a>
						))}
					</div>
					<div className="flex flex-grow m-2 p-2 items-center">
						<SocialLinks />
					</div>
				</div>
			</div>
			<div className="flex justify-center m-2 mb-0 p-2 pb-10 text-sm items-center">
				<div className="flex items-center justify-end m-2 p-2 mr-0">
					&copy; Rohan Jain {new Date().getFullYear()}
				</div>
				<div className="text-white text-opacity-30 font-extralight text-2xl">
					{' '}
					|{' '}
				</div>
				<div className="flex items-center justify-start ml-0 m-2 p-2">
					Made with{' '}
					<svg
						width="82"
						height="40"
						viewBox="0 0 148 90"
						version="1.1"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						color="white"
						style={{ transform: 'translateX(4%)', shapeRendering: 'auto' }}>
						<path
							d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
							fill="currentColor"
							fillRule="nonzero"></path>
					</svg>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
