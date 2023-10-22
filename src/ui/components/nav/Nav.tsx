"use client";

import type { ReactNode } from "react";
import clsx from "clsx";
import ReactFocusLock from "react-focus-lock";
import { MenuTrigger } from "./components/MenuTrigger";
import { useNav } from "./useNav";

type Props = {
	iconLinks: ReactNode;
	navLinks: ReactNode;
};

export const Nav = ({ iconLinks, navLinks }: Props) => {
	const { isOpen, toggleMenu } = useNav();

	return (
		<nav className="flex w-full gap-4 lg:gap-8" aria-label="Main navigation">
			<ReactFocusLock
				className="order-last flex h-full gap-4 md:order-first lg:gap-8"
				returnFocus
				disabled={!isOpen}
			>
				<ul
					className={clsx(
						isOpen
							? "translate-y-0 opacity-100"
							: "-translate-y-full opacity-0 md:translate-y-0 md:opacity-100",
						"duration-300 motion-safe:transition-opacity",
						"fixed inset-0 z-10 flex h-[100dvh] flex-col overflow-x-auto whitespace-nowrap bg-white px-3 pt-16 sm:px-8 md:relative md:top-auto md:flex md:h-auto md:flex-row md:gap-4 md:bg-transparent md:px-0 md:pt-0 lg:gap-8",
						"divide-y pb-3 md:pb-0 [&>li]:py-4",
					)}
					id="main-menu"
				>
					{navLinks}
				</ul>
				<MenuTrigger isOpen={isOpen} onClick={toggleMenu} />
			</ReactFocusLock>
			{iconLinks}
		</nav>
	);
};
