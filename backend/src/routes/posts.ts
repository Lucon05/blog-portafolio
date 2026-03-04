import { and, eq } from "drizzle-orm";
import { Router } from "express";
import z from "zod";

import { db } from "../db";
import { postsTable } from "../db/schema";
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

routerPosts.get("/posts", async (_req, res) => {
  const posts = await db
    .select()
    .from(postsTable)
    .where(eq(postsTable.published, true));
  res.json(posts);
});

routerPosts.get("/posts/:slug", async (req, res) => {
  const { slug } = req.params;

  const post = await getPost(slug);

  if (!post) {
    res.status(404).end();
    return;
  }

  res.json(post);
});

routerPosts.post("/posts", requireAuth, async (req, res) => {
  // validacion
  const input = createPostSchema.safeParse(req.body);
  if (!input.success) {
    return res.status(400).json({ errors: input.error.issues });
  }

  // creacion del slug
  const slug = slugify(input.data.title);

  const insertResult = await db
    .insert(postsTable)
    .values({
      body: input.data.body,
      title: input.data.title,
      slug,
      published: input.data.published,
    })
    .returning();

  res.status(201).json(insertResult).end();
});

routerPosts.put("/posts/:slug", requireAuth, async (req, res) => {
  const slug = z.string().parse(req.params.slug);

  // validacion
  const input = updatePostSchema.safeParse(req.body);
  if (!input.success) {
    return res.status(400).json({ errors: input.error.issues });
  }
  const post = await getPost(slug);
  if (!post) {
    res.status(404).end();
    return;
  }

  const updateResult = await db
    .update(postsTable)
    .set({
      ...input.data,
      slug: input.data.title ? slugify(input.data.title) : undefined,
    })
    .where(eq(postsTable.slug, slug))
    .returning();

  res.status(200).json(updateResult);
});

routerPosts.delete("/posts/:slug", requireAuth, async (req, res) => {
  const slug = z.string().parse(req.params.slug);

  const post = await getPost(slug);

  if (!post) {
    res.status(404).end();
    return;
  }

  await db.delete(postsTable).where(eq(postsTable.slug, slug));

  res.status(204).end();
});

export default routerPosts;
