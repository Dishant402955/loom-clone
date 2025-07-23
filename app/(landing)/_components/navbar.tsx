import Link from "next/link";

export const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-background/30 border-b border-border shadow-sm">
			<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
				<div className="flex items-center space-x-2">
					<img src="/logo.svg" alt="logo" className="h-7 w-7" />
					<span className="text-xl font-semibold tracking-wide">boom</span>
				</div>
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
