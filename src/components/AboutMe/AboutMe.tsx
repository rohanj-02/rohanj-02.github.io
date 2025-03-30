import React from 'react';
import Section from '../Layout/Section';
import { motion } from 'framer-motion';
import AnimateWhenVisible from '../utils/AnimateWhenVisible';

export default function AboutMe(): JSX.Element {
	return (
		<Section id="about-me" title="About Me" inverted>
			<div className="flex justify-center mr-0 sm:mr-4 mb-4 sm:mb-0 items-center">
				<AnimateWhenVisible
					variants={{
						hidden: {
							scale: 0,
						},
						visible: {
							scale: [0, 1.2, 1],
							transition: {
								delay: 0.5,
							},
						},
					}}
				>
					<motion.img
						src="./images/profile_image.webp"
						className="max-h-72"
						alt="Rohan Jain"
					/>
				</AnimateWhenVisible>
			</div>
			<div className="sm:container max-w-4xl mx-4 px-4 mb-10 pb-5 py-6 overflow-hidden">
				<AnimateWhenVisible
					variants={{
						hidden: {
							opacity: 0,
							x: '8rem',
						},
						visible: {
							opacity: 1,
							x: '0rem',
							transition: {
								delay: 0.5,
							},
						},
					}}
				>
					<motion.p>
						I am a software engineer specializing in scalable system design and
						distributed systems. Currently working at Goldman Sachs, I build and
						optimize high-performance microservices that handle millions of
						daily requests. My expertise spans Java, Spring Boot, AWS, and
						various cloud technologies, with a focus on creating resilient
						architectures that evolve with business needs.
						<br /> <br />
						Previously, I worked as a founding engineer at{' '}
						<a
							href="https://thememboro.com"
							target="_blank"
							rel="noreferrer"
							className="text-accent hover:underline"
						>
							Memboro
						</a>
						, where I helped build a social media platform from the ground up. I
						graduated from{' '}
						<a
							href="https://www.iiitd.ac.in/"
							target="_blank"
							rel="noreferrer"
							className="text-accent hover:underline"
						>
							IIITD
						</a>{' '}
						with a BTech in Computer Science.
						<br /> <br />I am passionate about system design patterns and
						cloud-native architectures, constantly exploring ways to improve
						performance, reliability, and scalability in distributed systems. My
						recent work has focused on optimizing microservices architectures
						and enhancing system reliability through advanced monitoring and
						automated testing.
					</motion.p>
				</AnimateWhenVisible>
			</div>
		</Section>
	);
}
