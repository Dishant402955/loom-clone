import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Loom Clone",
	description: "A new recording tool that just records.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}
