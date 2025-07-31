import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link
			className="flex justify-between items-center px-2 py-1 hover:bg-accent rounded-lg gap-x-2"
			href={"/"}
		>
			<Image src={"/logo.svg"} alt="logo" height={35} width={35} />
			<p className="text-2xl font-bold">Boom</p>
		</Link>
	);
};
