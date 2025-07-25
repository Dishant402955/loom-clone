"use server";

import { db } from "@/db";
import { folder, video } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getAllUserVideos = async ({
	workspaceId,
}: {
	workspaceId: string;
}) => {
	try {
		const videos = await db
			.select({
				id: video.id,
				title: video.title,
				createdAt: video.createdAt,
				source: video.source,
				processing: video.processing,
				folder: { id: folder.id, name: folder.name },
			})
			.from(video)
			.where(eq(video.workspaceId, workspaceId));
		return { status: 200, success: true, data: { videos } };
	} catch (error) {
		return { status: 500, success: false };
	}
};
