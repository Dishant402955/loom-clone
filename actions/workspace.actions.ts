"use server";

import { db } from "@/db";
import { member, subscription, user, workspace } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";

export const verifyAccessToWorkspace = async ({
	workspaceId,
}: {
	workspaceId: string;
}) => {
	try {
		const auth = await currentUser();

		if (!auth) {
			return { status: 403, success: false, data: undefined };
		}

		const existingUser = await db.query.user.findFirst({
			where: eq(user.clerkId, auth.id),
		});

		if (!existingUser) {
			return { status: 403, success: false, data: undefined };
		}

		const workspaceMember = await db.query.member.findFirst({
			where: and(
				eq(member.userId, existingUser.id),
				eq(member.workspaceId, workspaceId)
			),
		});

		if (workspaceMember) {
			return {
				status: 200,
				success: true,
				data: {
					workspace: { id: workspaceMember.workspaceId },
					userId: existingUser.id,
				},
			};
		}

		return { status: 403, success: false, data: undefined };
	} catch (error) {
		return { status: 500, success: false, data: undefined };
	}
};

export const getWorkspaces = async ({ userId }: { userId: string }) => {
	try {
		const workspaces = await db.query.workspace.findMany({
			where: eq(member.userId, userId),
			with: {
				members: { columns: { userId: true, workspaceId: true } },
			},
			columns: { userId: false },
		});

		return { status: 200, success: true, data: workspaces };
	} catch (error) {
		return { status: 500, success: false };
	}
};
