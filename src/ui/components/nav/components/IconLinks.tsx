import { Suspense } from "react";
import { AccountLink } from "./AccountLink";
import { CartNavItem } from "./CartNavItem";

export const IconLinks = () => {
	return (
		<div className="z-20 ml-auto flex gap-4 lg:gap-8">
			<div className="flex items-center justify-center whitespace-nowrap">
				<AccountLink />
			</div>
			<div className="flex items-center">
				<Suspense fallback={<div className="w-6" />}>
					<CartNavItem />
				</Suspense>
			</div>
		</div>
	);
};
