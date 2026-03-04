import "dotenv/config";

import { randomBytes } from "node:crypto";
import type { Request } from "express";
import { eq } from "drizzle-orm";
import express from "express";
import z from "zod";

import { db } from "../db";
import { sessions, users } from "../db/schema";
import { passwordEquals } from "../lib/password";
import { loginSchema } from "../schemas/login";

const router = express.Router();

router.post("/login", async (req, res) => {
  const body = loginSchema.parse(req.body);

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, body.email));

  if (!user) {
    res.status(404).json({ message: "Invalid credentials" }).end();
    return;
  }

  // 3. Verificar la contraseña contra el hash guardado
  if (!(await passwordEquals(user.passwordHash, body.password))) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }

  const sessionId = randomBytes(32).toString("hex");

  res.cookie("session", sessionId, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/",
  });

  const expiresAt = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000,
  ).toISOString();

  await db.insert(sessions).values({
    id: sessionId,
    userId: user.id,
    expiresAt,
  });

  return res.json({ message: "Logged in" });
});

router.post("/logout", async (req: Request, res) => {
  const sessionId = z.string().parse(req.cookies.session);

  if (sessionId) {
    // Borrar la sesión de la base de datos
    await db.delete(sessions).where(eq(sessions.id, sessionId));
  }
  // Limpiar la cookie del navegador
  res.clearCookie("session");
  return res.json({ message: "Logged out" });
});

export default router;
