import { Logo } from "@/components/logo";

interface Props {
	children?: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
	return (
		<div className="flex justify-center items-center h-full w-full">
			<div className="absolute left-6 top-4">
				<Logo />
			</div>
			{children}
		</div>
	);
};

export default AuthLayout;
