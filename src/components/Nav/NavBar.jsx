"use client";

import { useEffect } from "react";
import NavBarMenu from "@/components/Nav/NavBarMenu";
import NavBarMobile from "@/components/Nav/NavBarMobile";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import Logo from "@/components/Nav/Logo";
import Image from "next/image";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/store";

export default function Header({ children }) {
	const [darkMode, setDarkMode] = useAtom(darkModeAtom);

	// Whenever darkMode state changes, update the local storage and the class on the body
	useEffect(() => {
		//? ideally, i wanted the last theme to be saved and load on refresh, but it's not working
		//? or on next visit, but is causes a flicker on the body class
		//? this can be fixed by using libraries like next-themes
		// localStorage.setItem("darkMode", darkMode.toString());
		document.body.classList.toggle("dark", darkMode);
	}, [darkMode]);

	return (
		<>
			<header className="sticky top-0 z-50 overflow-hidden">
				{/* background */}
				<div
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d80c9b] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
				{/* background */}
				<div className="mx-auto max-w-8xl px-8 sm:px-6 lg:px-8 backdrop-blur-md ">
					<div className="relative flex h-16 items-center justify-between">
						<BurgerMenu />
						<div
							id="logo"
							className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
						>
							<Logo className="block dark:bg-transparent bg-black rounded-3xl h-14 w-auto lg:hidden" />
							<Logo className="hidden dark:bg-transparent bg-black rounded-3xl h-14 w-auto lg:block" />
						</div>
						<div className="hidden sm:block flex-grow">
							<NavBarMenu />
						</div>
						<button onClick={() => setDarkMode((prev) => !prev)}>
							{!darkMode ? (
								<Image
									src="/theme/moon-fog-svgrepo-com.svg"
									width={25}
									height={25}
									alt="Dark Mode Icon"
								/>
							) : (
								<Image
									src="/theme/sun-2-svgrepo-com.svg"
									width={25}
									height={25}
									alt="Light Mode Icon"
								/>
							)}
						</button>
					</div>
				</div>
				<NavBarMobile />
			</header>
			{children}
		</>
	);
}
