"use server";

import { db } from "@/db";
import { media, subscription, user, workspace } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export const afterAuthentication = async () => {
	try {
		const currUser = await currentUser();

		if (!currUser) {
			return { status: 403, success: false };
		}

		const existingUser = await db.query.user.findFirst({
			where: eq(user.clerkId, currUser.id),
			columns: { id: true },
		});

		if (existingUser) {
			return {
				status: 200,
				success: true,
				data: { user: { ...existingUser } },
			};
		}

		const newUser = await db
			.insert(user)
			.values({
				clerkId: currUser.id,
				email: currUser.emailAddresses[0].emailAddress,
				firstName: currUser.firstName,
				lastName: currUser.lastName,
				image: currUser.imageUrl,
				trial: true,
				createdAt: new Date(Date.now()).toISOString(),
			})
			.returning({ id: user.id });

		await db.batch([
			db
				.insert(workspace)
				.values({
					name: `${currUser.firstName}'s Workspace`,
					userId: newUser[0].id,
					type: "PRIVATE",
				})
				.returning(),
			db
				.insert(subscription)
				.values({
					userId: newUser[0].id,
					createdAt: new Date(Date.now()).toISOString(),
					plan: "FREE",
				})
				.returning(),

			db
				.insert(media)
				.values({
					userId: newUser[0].id,
					presetType: "SD",
				})
				.returning(),
		]);

		return {
			status: 201,
			success: true,
			data: {
				user: { ...newUser[0] },
			},
		};
	} catch (error) {
		return { status: 505, success: false };
	}
};

export const afterRedirect = async () => {
	try {
		const currUser = await currentUser();

		if (!currUser) {
			return { status: 403, success: false };
		}

		// const existingUser = await db.query.user.findFirst({
		// 	where: eq(user.clerkId, currUser.id),
		// 	with: {
		// 		workspaces: true,
		// 		subscriptions: true,
		// 		media: true,
		// 	},
		// });

		// if (existingUser) {
		// 	return {
		// 		status: 200,
		// 		success: true,
		// 		data: { ...existingUser, media: existingUser.media[0] },
		// 	};
		// }

		const existingUser = await db.query.user.findFirst({
			where: eq(user.clerkId, currUser.id),
			with: {
				workspaces: true,
			},
			columns: { id: true },
		});

		if (existingUser) {
			return {
				status: 200,
				success: true,
				data: { ...existingUser },
			};
		}

		return { status: 404, success: false };
	} catch (error) {
		return { status: 505, success: false };
	}
};
