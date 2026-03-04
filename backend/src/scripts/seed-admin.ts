import "dotenv/config";

import assert from "assert";

import { db } from "../db";
import { users } from "../db/schema";
import { hashPassword } from "../lib/password";

assert(process.env.SEED_ADMIN_EMAIL);
assert(process.env.SEED_ADMIN_PASSWORD);

await db.insert(users).values({
  email: process.env.SEED_ADMIN_EMAIL,
  passwordHash: await hashPassword(process.env.SEED_ADMIN_PASSWORD),
});
