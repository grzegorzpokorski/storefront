import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useOnKeydown } from "@/hooks/useOnKeydown";
import { useIsAboveBreakpoint } from "@/hooks/useIsAboveBreakpoint";

export const useNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrollbarWidth, setScrollbarWidth] = useState(0);
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (!scrollbarWidth) {
			setScrollbarWidth(window.innerWidth - document.documentElement.clientWidth);
		}
	}, [scrollbarWidth]);

	const removeScrollbar = useCallback(() => {
		document.body.classList.add("overflow-y-hidden", "md:overflow-y-auto");
		document.body.style.marginRight = `${scrollbarWidth}px`;
	}, [scrollbarWidth]);

	const restoreScrollbar = useCallback(() => {
		document.body.classList.remove("overflow-y-hidden", "md:overflow-y-auto");
		document.body.style.removeProperty("margin-right");
	}, []);

	const toggleMenu = useCallback(() => {
		setIsOpen((prev) => !prev);
		if (isOpen) {
			restoreScrollbar();
		} else {
			removeScrollbar();
		}
	}, [isOpen, removeScrollbar, restoreScrollbar]);

	const openMenu = useCallback(() => {
		setIsOpen(true);
		removeScrollbar();
	}, [removeScrollbar]);

	const closeMenu = useCallback(() => {
		setIsOpen(false);
		restoreScrollbar();
	}, [restoreScrollbar]);

	useEffect(() => {
		closeMenu();
	}, [searchParams, pathname, closeMenu]);

	useOnKeydown(
		"Escape",
		useCallback(() => {
			closeMenu();
		}, [closeMenu]),
	);

	const isAboveBreakpoint = useIsAboveBreakpoint({ breakpoint: 768 });
	useEffect(() => {
		if (isAboveBreakpoint) {
			closeMenu();
		}
	}, [closeMenu, isAboveBreakpoint]);

	return useMemo(
		() => ({
			isOpen,
			toggleMenu,
			openMenu,
			closeMenu,
			isAboveBreakpoint,
		}),
		[closeMenu, isAboveBreakpoint, isOpen, openMenu, toggleMenu],
	);
};
