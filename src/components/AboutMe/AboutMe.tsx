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
						I&apos;m a software engineer with a knack for learning—and for
						capturing the world through my lens. At{' '}
						<a
							href="https://www.goldmansachs.com/"
							target="_blank"
							rel="noreferrer"
							className="text-accent hover:underline"
						>
							Goldman Sachs
						</a>
						, I build and optimize high-performance{' '}
						<a
							href="https://spring.io/projects/spring-boot"
							target="_blank"
							rel="noreferrer"
							className="text-accent hover:underline"
						>
							Spring Boot
						</a>{' '}
						microservices with resilient architectures deployed on{' '}
						<a
							href="https://aws.amazon.com/"
							target="_blank"
							rel="noreferrer"
							className="text-accent hover:underline"
						>
							AWS
						</a>{' '}
						using{' '}
						<a
							href="https://www.terraform.io/"
							target="_blank"
							rel="noreferrer"
							className="text-accent hover:underline"
						>
							Terraform
						</a>
						.<br></br>
						<br></br>
						Previously, as a founding engineer at{' '}
						<a
							href="https://thememboro.com"
							target="_blank"
							rel="noreferrer"
							className="text-accent hover:underline"
						>
							Memboro
						</a>
						, I helped build a social media platform from the ground up. I hold
						a BTech in Computer Science from{' '}
						<a
							href="https://www.iiitd.ac.in/"
							target="_blank"
							rel="noreferrer"
							className="text-accent hover:underline"
						>
							IIITD
						</a>{' '}
						and have a passion for automating the mundane tasks, refining
						workflows, and constantly expanding my knowledge.
					</motion.p>
				</AnimateWhenVisible>
			</div>
		</Section>
	);
}
