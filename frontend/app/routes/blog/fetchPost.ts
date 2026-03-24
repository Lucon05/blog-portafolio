import z from "zod/v4";

import { backendErrorSchema } from "~/lib/backendErrorSchema";

const postSchema = z.object({
  title: z.string(),
  body: z.string(),
  slug: z.string(),
});

export type Post = z.infer<typeof postSchema>;

function backendErrorHandler(res: Response, body: unknown) {
  if (!res.ok) {
    try {
      const backendError = backendErrorSchema.parse(body);
      throw new Error(backendError.message);
    } catch (err) {
      console.error(err);
      throw new Error("Error desconocido");
    }
  }
}

export async function fetchPost(slug: string) {
  const res = await fetch("/api/posts/" + slug);
  const body = await res.json();

  backendErrorHandler(res, body);

  return postSchema.parse(body);
}

export async function fetchPosts() {
  const res = await fetch("/api/posts");
  const body = await res.json();

  backendErrorHandler(res, body);

  return postSchema.array().parse(body);
}
