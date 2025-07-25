import { verifyAccessToWorkspace } from "@/actions/workspace.actions";
import { redirect } from "next/navigation";

interface WorkspaceIdLayoutProps {
	children?: React.ReactNode;
	params: { workspaceId: string };
}

const WorkspaceIdLayout = async ({
	children,
	params,
}: WorkspaceIdLayoutProps) => {
	const { workspaceId } = await params;

	const workspace = await verifyAccessToWorkspace({ workspaceId });

	if (!workspace.success) {
		return redirect("/callback");
	}
	return (
		<div className="h-full w-full">
			{JSON.stringify(workspace)}
			{children}
		</div>
	);
};

export default WorkspaceIdLayout;
