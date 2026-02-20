import { and, eq } from "drizzle-orm";
import { Router } from "express";

import { db } from "../db";
import { postsTable } from "../db/schema";

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
  const [post] = await db
    .select()
    .from(postsTable)
    .where(and(eq(postsTable.slug, slug), eq(postsTable.published, true)));

  if (!post) {
    res.status(404).end();
    return;
  }

  res.json(post);
});

export default routerPosts;
