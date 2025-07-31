import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
	title: "Boom",
	description: "A recording tool that just records.",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
			}}
			signInFallbackRedirectUrl={"/"}
			signUpFallbackRedirectUrl={"/"}
		>
			<html lang="en">
				<body className={`antialiased h-full w-full`}>{children}</body>
			</html>
		</ClerkProvider>
	);
};

export default RootLayout;
