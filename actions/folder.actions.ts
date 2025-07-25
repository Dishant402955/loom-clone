"use server";

import { db } from "@/db";
import { folder } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getWorkspaceFolders = async ({
	workspaceId,
}: {
	workspaceId: string;
}) => {
	try {
		const folders = await db
			.select()
			.from(folder)
			.where(eq(folder.workspaceId, workspaceId));

		return { status: 200, success: true, data: { folders } };
	} catch (error) {
		return { status: 500, success: false };
	}
};
