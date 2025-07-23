import { Logo } from "@/components/logo";
import Link from "next/link";

export const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-background/30 border-b border-border shadow-sm">
			<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
				<Logo />
				<Link
					href="/dashboard"
					className="px-4 py-2 bg-primary text-background font-medium rounded-md hover:opacity-90 transition"
				>
					Dashboard →
				</Link>
			</div>
		</nav>
	);
};
