import "dotenv/config";

import type { NextFunction, Request, Response } from "express";
import { eq } from "drizzle-orm";
import z from "zod";

import { db } from "../db";
import { sessions } from "../db/schema";

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const sessionCookie = z
    .string("Expected a session cookie")
    .parse(req.cookies.session);

  if (!sessionCookie) {
    res.status(401).end();
    return;
  }

  const [session] = await db
    .select()
    .from(sessions)
    .where(eq(sessions.id, sessionCookie));

  if (!session) {
    res.status(401).end();
    return;
  }

  const expiresAtDate = new Date(session.expiresAt);

  if (expiresAtDate.getTime() < Date.now()) {
    res.status(401).end();
    return;
  }

  req.userId = session.userId;
  next();
}
