import { type Metadata } from "next";
import { DemoImage, Details, Features, Footer, Navbar } from "./_components";

interface LandingLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: "Home Page",
	description: "A new recording tool that just records.",
};

const LandingLayout = ({ children }: LandingLayoutProps) => {
	return (
		<main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-start">
			<Navbar />
			{children}
			<Details />
			<DemoImage />
			<Features />
			<Footer />
		</main>
	);
};

export default LandingLayout;
