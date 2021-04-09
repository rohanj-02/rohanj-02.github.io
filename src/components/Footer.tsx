import React from 'react';
import {
	FileText,
	Facebook,
	Instagram,
	GitHub,
	Mail,
	Phone,
	Linkedin,
} from 'react-feather';
import Link from 'next/link';

function Footer(): JSX.Element {
	const arr = [
		{
			icon: <Mail />,
			text: 'rohan19095@iiitd.ac.in',
		},
		{
			icon: <Phone />,
			text: '+917838492901',
		},
		{
			icon: <FileText />,
			text: 'Download Resume',
		},
	];

	const social = [
		{
			icon: <Linkedin />,
			link: 'https://www.linkedin.com/in/rohanj02/',
		},
		{
			icon: <GitHub />,
			link: 'https://github.com/rohanj-02',
		},
		{
			icon: <Facebook />,
			link: '/',
		},
		{
			icon: <Instagram />,
			link: '/',
		},
	];
	return (
		<footer className="mt-10">
			<div className="flex justify-left md:justify-center align-middle">
				<div
					id="contact"
					className="flex flex-col flex-wrap md:flex-nowrap md:flex-row lg:w-1/2 md:w-3/4 sm:w-5/6 m-2 p-2">
					<div className="flex-grow m-2 p-2">
						{arr.map((elem, index) => (
							<div className="mt-2 p-2 flex" key={index}>
								<div className="mr-2">{elem.icon}</div>
								<div>{elem.text}</div>
							</div>
						))}
					</div>
					<div className="flex flex-grow m-2 p-2 items-center">
						{social.map((elem, index) => (
							<div
								key={index}
								className="m-1 rounded-full flex bg-secondary text-primary">
								<Link href={elem.link}>
									<a target="_blank" rel="noreferrer">
										<div className="p-2 text-center h-10 w-10">{elem.icon}</div>
									</a>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="flex justify-center m-2 mb-0 p-2 pb-10 text-sm">
				&copy; Rohan Jain {new Date().getFullYear()}
			</div>
		</footer>
	);
}

export default Footer;
