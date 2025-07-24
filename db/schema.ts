import { pgTable, unique, uuid, text, timestamp, varchar, boolean, foreignKey, integer, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const preset = pgEnum("preset", ['HD', 'SD'])
export const subscriptionplan = pgEnum("subscriptionplan", ['FREE', 'PRO'])
export const workspacetype = pgEnum("workspacetype", ['PRIVATE', 'PUBLIC'])


export const user = pgTable("user", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	clerkId: text().notNull(),
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp({ mode: 'string' }),
	email: text().notNull(),
	firstName: varchar({ length: 40 }),
	lastName: varchar({ length: 40 }),
	image: text(),
	trial: boolean().default(false).notNull(),
}, (table) => [
	unique("user_clerkId_key").on(table.clerkId),
	unique("user_email_key").on(table.email),
]);

export const video = pgTable("video", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	title: text().notNull(),
	description: text(),
	source: text(),
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp({ mode: 'string' }),
	folderId: uuid().notNull(),
	userId: uuid().notNull(),
	processing: boolean().default(false),
	workspaceId: uuid().notNull(),
	views: integer().default(0).notNull(),
	summary: text(),
}, (table) => [
	foreignKey({
			columns: [table.folderId],
			foreignColumns: [folder.id],
			name: "folder_ref"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "user_ref"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.workspaceId],
			foreignColumns: [workspace.id],
			name: "workspace_ref"
		}).onDelete("cascade"),
	unique("video_source_key").on(table.source),
]);

export const member = pgTable("member", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	userId: uuid().notNull(),
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp({ mode: 'string' }),
	member: boolean().default(true).notNull(),
	workspaceId: uuid().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "user_ref"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.workspaceId],
			foreignColumns: [workspace.id],
			name: "workspace_ref"
		}).onDelete("cascade"),
]);

export const workspace = pgTable("workspace", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: varchar({ length: 100 }).notNull(),
	userId: uuid().notNull(),
	type: workspacetype(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "user_ref"
		}).onDelete("cascade"),
]);

export const notification = pgTable("notification", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	userId: uuid().notNull(),
	content: text(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "user_ref"
		}).onDelete("cascade"),
]);

export const subscription = pgTable("subscription", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	userId: uuid().notNull(),
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp({ mode: 'string' }),
	customerId: text(),
	plan: subscriptionplan(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "user_ref"
		}).onDelete("cascade"),
	unique("subscription_userId_key").on(table.userId),
	unique("subscription_customerId_key").on(table.customerId),
]);

export const folder = pgTable("folder", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: varchar({ length: 100 }).notNull(),
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp({ mode: 'string' }),
	workspaceId: uuid().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.workspaceId],
			foreignColumns: [workspace.id],
			name: "workspace_ref"
		}).onDelete("cascade"),
]);

export const invite = pgTable("invite", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	senderId: uuid().notNull(),
	receiverId: uuid().notNull(),
	content: text(),
	workspaceId: uuid().notNull(),
	accepted: boolean().default(false).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.receiverId],
			foreignColumns: [user.id],
			name: "receiver_ref"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.senderId],
			foreignColumns: [user.id],
			name: "sender_ref"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.workspaceId],
			foreignColumns: [workspace.id],
			name: "workspace_ref"
		}).onDelete("cascade"),
]);

export const media = pgTable("media", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	screen: text(),
	mic: text(),
	camera: text(),
	presetType: preset(),
	userId: uuid().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "studio_ref"
		}).onDelete("cascade"),
	unique("media_userId_key").on(table.userId),
]);
