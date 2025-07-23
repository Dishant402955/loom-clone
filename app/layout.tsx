import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
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
		<ClerkProvider>
			<html lang="en">
				<body className={`antialiased`}>{children}</body>
			</html>
		</ClerkProvider>
	);
};

export default RootLayout;
