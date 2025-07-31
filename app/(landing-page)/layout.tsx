interface Props {
	children?: React.ReactNode;
}

const LandingLayout = ({ children }: Props) => {
	return (
		<div className="flex h-full w-full justify-center items-center">
			{children}
		</div>
	);
};

export default LandingLayout;
