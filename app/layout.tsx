import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
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
		<ClerkProvider
			afterSignOutUrl={"/sign-in"}
			appearance={{
				baseTheme: dark,
			}}
			signInForceRedirectUrl={"/dashboard"}
			signUpForceRedirectUrl={"/dashboard"}
		>
			<html lang="en">
				<body className={`antialiased`}>{children}</body>
			</html>
		</ClerkProvider>
	);
};

export default RootLayout;
