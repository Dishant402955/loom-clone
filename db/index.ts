import "dotenv/config";
import * as s from "./schema";
import * as r from "./relations";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!); // ✅ Create neon client

export const db = drizzle(sql, {
	schema: { ...s, ...r },
});
