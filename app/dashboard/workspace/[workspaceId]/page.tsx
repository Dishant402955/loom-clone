interface WorkspaceIdPageProps {
	params: { workspaceId: string };
}

const WorkspaceIdPage = async ({ params }: WorkspaceIdPageProps) => {
	const { workspaceId } = await params;
	return <div>{workspaceId}</div>;
};

export default WorkspaceIdPage;
