import { Logo } from "@/components/logo";

interface AuthLayoutProps {
	children?: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<div className="flex min-h-screen justify-center items-center">
			<div className="absolute top-4 left-4">
				<Logo />
			</div>
			{children}
		</div>
	);
};

export default AuthLayout;
