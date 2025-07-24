import { relations } from "drizzle-orm/relations";
import { folder, video, user, workspace, member, notification, subscription, invite, media } from "./schema";

export const videoRelations = relations(video, ({one}) => ({
	folder: one(folder, {
		fields: [video.folderId],
		references: [folder.id]
	}),
	user: one(user, {
		fields: [video.userId],
		references: [user.id]
	}),
	workspace: one(workspace, {
		fields: [video.workspaceId],
		references: [workspace.id]
	}),
}));

export const folderRelations = relations(folder, ({one, many}) => ({
	videos: many(video),
	workspace: one(workspace, {
		fields: [folder.workspaceId],
		references: [workspace.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	videos: many(video),
	members: many(member),
	workspaces: many(workspace),
	notifications: many(notification),
	subscriptions: many(subscription),
	invites_receiverId: many(invite, {
		relationName: "invite_receiverId_user_id"
	}),
	invites_senderId: many(invite, {
		relationName: "invite_senderId_user_id"
	}),
	media: many(media),
}));

export const workspaceRelations = relations(workspace, ({one, many}) => ({
	videos: many(video),
	members: many(member),
	user: one(user, {
		fields: [workspace.userId],
		references: [user.id]
	}),
	folders: many(folder),
	invites: many(invite),
}));

export const memberRelations = relations(member, ({one}) => ({
	user: one(user, {
		fields: [member.userId],
		references: [user.id]
	}),
	workspace: one(workspace, {
		fields: [member.workspaceId],
		references: [workspace.id]
	}),
}));

export const notificationRelations = relations(notification, ({one}) => ({
	user: one(user, {
		fields: [notification.userId],
		references: [user.id]
	}),
}));

export const subscriptionRelations = relations(subscription, ({one}) => ({
	user: one(user, {
		fields: [subscription.userId],
		references: [user.id]
	}),
}));

export const inviteRelations = relations(invite, ({one}) => ({
	user_receiverId: one(user, {
		fields: [invite.receiverId],
		references: [user.id],
		relationName: "invite_receiverId_user_id"
	}),
	user_senderId: one(user, {
		fields: [invite.senderId],
		references: [user.id],
		relationName: "invite_senderId_user_id"
	}),
	workspace: one(workspace, {
		fields: [invite.workspaceId],
		references: [workspace.id]
	}),
}));

export const mediaRelations = relations(media, ({one}) => ({
	user: one(user, {
		fields: [media.userId],
		references: [user.id]
	}),
}));