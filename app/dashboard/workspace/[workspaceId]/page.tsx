interface WorkspaceIdPageProps {
	params: { workspaceId: string };
}

const WorkspaceIdPage = async ({ params }: WorkspaceIdPageProps) => {
	const { workspaceId } = await params;
	return (
		<div className="h-full w-full flex justify-center items-center">
			{workspaceId}
		</div>
	);
};

export default WorkspaceIdPage;
