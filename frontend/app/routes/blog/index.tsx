import { useEffect, useState } from "react";

import type { Post } from "./fetchPost";
import { Card } from "~/components/card";

import { fetchPosts } from "./fetchPost";

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);  

  useEffect(() => {
    fetchPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return "Cargando...";
  }

  if (error) {
    return "Hubo un error: " + error;
  }

  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        {posts.map(({ slug, title, body }) => (
          <a href={"./blog/" + slug}>
            <Card>
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="line-clamp-3">{body}</p>
            </Card>
          </a>
        ))}
      </div>
    </>
  );
}
