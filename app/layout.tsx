import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Loom Clone",
	description: "A new recording tool that just records.",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en" className="dark">
			<body className={`antialiased`}>{children}</body>
		</html>
	);
};

export default RootLayout;
