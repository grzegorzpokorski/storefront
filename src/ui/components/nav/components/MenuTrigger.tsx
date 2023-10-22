"use client";

import clsx from "clsx";

type Props = {
	onClick: () => void;
	isOpen: boolean;
};
const itemStyles = "ease h-0.5 w-6 bg-zinc-800 transition duration-300 motion-reduce:transition-none";

export const MenuTrigger = ({ onClick, isOpen }: Props) => {
	return (
		<button
			className="z-20 order-last flex h-6 w-6 flex-col items-center justify-center gap-1.5 self-center md:hidden"
			type="button"
			aria-label={`${isOpen ? "Close" : "Open"} menu`}
			aria-expanded={isOpen}
			aria-controls="main-menu"
			onClick={onClick}
		>
			<div className={clsx(itemStyles, isOpen && "translate-y-2 rotate-45")} />
			<div className={clsx(itemStyles, isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100")} />
			<div className={clsx(itemStyles, isOpen && "-translate-y-2 -rotate-45")} />
		</button>
	);
};
