interface Props {
	children?: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
	return <div className="flex h-full w-full ">{children}</div>;
};

export default DashboardLayout;
