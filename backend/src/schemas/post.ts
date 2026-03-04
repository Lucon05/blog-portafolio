import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string().min(1, "Title is required").max(200),
  body: z.string().min(1, "Body is required"),
  published: z.boolean().optional().default(false),
});

export const updatePostSchema = createPostSchema.partial();
