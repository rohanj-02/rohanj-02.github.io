import React from 'react';
import { FaFilePdf, FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import SocialLinks from '../Hero/SocialLinks';

function Footer(): JSX.Element {
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

	return (
		<footer className="mt-10">
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
			<div className="flex justify-center m-2 mb-0 p-2 pb-10 text-sm">
				&copy; Rohan Jain {new Date().getFullYear()}
			</div>
		</footer>
	);
}

export default Footer;
