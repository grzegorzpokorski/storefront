"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const companyName = "ACME";
const styles = "flex items-center font-bold z-20";

export const Logo = () => {
	const pathname = usePathname();

	if (pathname === "/") {
		return (
			<h1 className={styles} aria-label="homepage">
				{companyName}
			</h1>
		);
	}
	return (
		<div className={styles}>
			<Link aria-label="homepage" href="/">
				{companyName}
			</Link>
		</div>
	);
};
