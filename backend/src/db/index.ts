import assert from "node:assert";
import { drizzle } from "drizzle-orm/libsql";

assert(process.env.DB_FILE_NAME, "Olvidaste configurar la DB");
export const db = drizzle(process.env.DB_FILE_NAME);
