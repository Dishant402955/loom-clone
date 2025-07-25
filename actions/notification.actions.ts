"use server";

import { db } from "@/db";
import { notification } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getNotifications = async ({ userId }: { userId: string }) => {
	try {
		const notifications = await db
			.select()
			.from(notification)
			.where(eq(notification.userId, userId));
		return { status: 200, success: true, data: { notifications } };
	} catch (error) {
		return { status: 500, success: false };
	}
};
