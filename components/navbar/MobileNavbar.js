import { useState } from 'react';

export default function MobileNavbar(props) {
	const { openMobileNav } = props;
	const [activeItem, setActiveItem] = useState(-1);
	if (openMobileNav) {
		return <></>;
	}

	return (
		<main class="sm:hidden z-40">
			<section class="px-2 pt-2 pb-3 space-y-1">
				<header
					onClick={() => setActiveItem(index)}
					class="group text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-base font-medium flex justify-between items-center cursor-pointer">
					<span>Dashboard</span>
					<div class="rounded-full border border-white group-hover:border-black w-7 h-7 flex items-center justify-center">
						<svg
							datareactid="281"
							fill="none"
							height="24"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							width="24"
							xmlns="http://www.w3.org/2000/svg">
							<polyline points="18 15 12 9 6 15" />
						</svg>
					</div>
				</header>
			</section>
		</main>
	);
}
