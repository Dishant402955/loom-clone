import Link from "next/link";

export const Logo = () => {
	return (
		<>
			<Link className="flex items-center space-x-2" href={"/"}>
				<img src="/logo.svg" alt="logo" className="h-7 w-7" />
				<span className="text-xl font-semibold tracking-wide">boom</span>
			</Link>
		</>
	);
};
