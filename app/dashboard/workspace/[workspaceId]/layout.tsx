import { getWorkspaceFolders } from "@/actions/folder.actions";
import { getNotifications } from "@/actions/notification.actions";
import { getAllUserVideos } from "@/actions/video.actions";
import {
	getWorkspaces,
	verifyAccessToWorkspace,
} from "@/actions/workspace.actions";
import { ReactQueryClientProvider } from "@/components/providers/reactquery-client-provider";
import { dehydrate, QueryClient } from "@tanstack/react-query";
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

	const res = await verifyAccessToWorkspace({ workspaceId });

	if (!res.success || !res.data?.userId) {
		return redirect("/callback");
	}

	const query = new QueryClient();
	await query.prefetchQuery({
		queryKey: ["workspace-folders"],
		queryFn: () => getWorkspaceFolders({ workspaceId }),
	});
	await query.prefetchQuery({
		queryKey: ["user-videos"],
		queryFn: () => getAllUserVideos({ workspaceId }),
	});
	await query.prefetchQuery({
		queryKey: ["user-workspaces"],
		queryFn: () => getWorkspaces({ userId: res.data?.userId }),
	});
	await query.prefetchQuery({
		queryKey: ["user-notifications"],
		queryFn: () => getNotifications({ userId: res.data?.userId }),
	});

	return (
		<ReactQueryClientProvider dehydratedState={dehydrate(query)}>
			<div className="h-full w-full">{children}</div>
		</ReactQueryClientProvider>
	);
};

export default WorkspaceIdLayout;
