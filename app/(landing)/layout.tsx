import { type Metadata } from "next";

interface LandingLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: "Home Page",
	description: "A new recording tool that just records.",
};

const LandingLayout = ({ children }: LandingLayoutProps) => {
	return <div className="h-full">{children}</div>;
};

export default LandingLayout;
