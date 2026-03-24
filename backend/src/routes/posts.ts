import type { Request } from "express";
import { and, desc, eq } from "drizzle-orm";
import { Router } from "express";
import z from "zod";

import { db } from "../db";
import { postsTable } from "../db/schema";
import { requireOrThrowNotFound } from "../lib/requireOrThrowNotFound";
import { slugify } from "../lib/slugify";
import { requireAuth } from "../middleware/auth";
import { createPostSchema, updatePostSchema } from "../schemas/post";

async function getPost(slug: string) {
  const [post] = await db
    .select()
    .from(postsTable)
    .where(and(eq(postsTable.slug, slug)));

  return post;
}

const routerPosts = Router();

routerPosts.get("/posts", async (req: Request, res) => {
  const query = db.select().from(postsTable);

  if (!req.cookies.session) {
    query.where(eq(postsTable.published, true));
  }

  query.orderBy(desc(postsTable.id));

  const posts = await query;

  res.json(posts);
});

routerPosts.get("/posts/:slug", async (req, res) => {
  const { slug } = req.params;

  const post = await getPost(slug);

  requireOrThrowNotFound(post, "el post");

  res.json(post);
});

routerPosts.post("/posts", async (req, res) => {
  // validacion
  const input = createPostSchema.parse(req.body);

  // creacion del slug
  const slug = slugify(input.title);

  const [insertResult] = await db
    .insert(postsTable)
    .values({
      body: input.body,
      title: input.title,
      slug,
      published: input.published,
    })
    .returning();

  res.status(201).json(insertResult).end();
});

routerPosts.put("/posts/:slug", requireAuth, async (req, res) => {
  const slug = z.string().parse(req.params.slug);

  // validacion
  const input = updatePostSchema.parse(req.body);

  const post = await getPost(slug);

  requireOrThrowNotFound(post, "el post");

  const [updateResult] = await db
    .update(postsTable)
    .set({
      ...input,
      slug: input.title ? slugify(input.title) : undefined,
    })
    .where(eq(postsTable.slug, slug))
    .returning();

  res.status(200).json(updateResult);
});

routerPosts.delete("/posts/:slug", requireAuth, async (req, res) => {
  const slug = z.string().parse(req.params.slug);

  const post = await getPost(slug);

  requireOrThrowNotFound(post, "el post");

  await db.delete(postsTable).where(eq(postsTable.slug, slug));

  res.status(204).end();
});

export default routerPosts;
