import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const postsTable = sqliteTable("posts", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  body: text().notNull(),
  slug: text().notNull().unique(),
  published: int({ mode: "boolean" }).notNull().default(false),
});
