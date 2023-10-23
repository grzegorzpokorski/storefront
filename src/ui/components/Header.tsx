"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { Logo } from "./Logo";
import { AccountLink } from "./nav/components/AccountLink";

const navigation = [
	{ name: "Dashboard", href: "#", current: true },
	{ name: "Team", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Calendar", href: "#", current: false },
];

export function Header() {
	return (
		<Menu
			as="header"
			className="fixed top-0 z-20 w-full bg-neutral-100/50 backdrop-blur-md duration-300 data-[headlessui-state=open]:bg-white"
		>
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="flex w-full">
								<div className="mr-auto flex flex-shrink-0 items-center md:mr-0">
									<Logo />
								</div>
								<div className="hidden sm:ml-6 md:block">
									<ul className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												aria-current={item.current ? "page" : undefined}
												className={clsx(
													open
														? "border-neutral-900 text-neutral-900"
														: "border-transparent text-neutral-500",
													"inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700",
												)}
											>
												{item.name}
											</a>
										))}
									</ul>
								</div>
								<div className="ml-auto flex gap-4">
									<AccountLink />
								</div>
							</div>
							<Menu.Button className="ms-4 flex h-6 w-6 flex-col items-center justify-center gap-1.5 md:hidden">
								<span className="sr-only">Open main menu</span>
								<div
									className={clsx(
										"ease h-0.5 w-6 bg-zinc-800 transition duration-300 motion-reduce:transition-none",
										open && "translate-y-2 rotate-45",
									)}
								/>
								<div
									className={clsx(
										"ease h-0.5 w-6 bg-zinc-800 transition duration-300 motion-reduce:transition-none",
										open ? "scale-0 opacity-0" : "scale-100 opacity-100",
									)}
								/>
								<div
									className={clsx(
										"ease h-0.5 w-6 bg-zinc-800 transition duration-300 motion-reduce:transition-none",
										open && "-translate-y-2 -rotate-45",
									)}
								/>
							</Menu.Button>
							<Transition
								as={Fragment}
								enter="transition duration-300"
								enterFrom="opacity-0 -translate-y-3 bg-white/50"
								enterTo="opacity-100 translate-y-0 bg-white"
								leave="transition duration-300"
								leaveFrom="opacity-100 translate-y-0 bg-white"
								leaveTo="opacity-0 -translate-y-3 bg-white/50"
							>
								<Menu.Items as="div" className="fixed inset-0 top-16 h-full md:hidden">
									<ul className="flex flex-col divide-y overflow-y-auto bg-white px-3 pb-3 sm:px-6 lg:px-8 [&>li]:py-3">
										{navigation.map((item) => (
											<li key={item.name}>
												<Menu.Item>
													<Link href={item.href}>{item.name}</Link>
												</Menu.Item>
											</li>
										))}
									</ul>
								</Menu.Items>
							</Transition>
						</div>
					</div>
				</>
			)}
		</Menu>
	);
	// return (
	// 	<header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
	// 		<div className="mx-auto max-w-7xl px-3 sm:px-8">
	// 			<div className="flex h-16 justify-between gap-4 md:gap-8">
	// 				<Logo />
	// 				<Nav />
	// 			</div>
	// 		</div>
	// 	</header>
	// );
}
