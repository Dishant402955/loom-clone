import { Logo } from "@/components/logo";

interface AuthLayoutProps {
	children?: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<div className="flex min-h-screen justify-center items-center">
			<div className="absolute top-6 left-8 hover:bg-accent px-4 py-2 rounded-lg cursor-pointer">
				<Logo />
			</div>
			{children}
		</div>
	);
};

export default AuthLayout;
