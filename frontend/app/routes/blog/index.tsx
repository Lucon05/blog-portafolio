import { useEffect, useState } from "react";

import type { Post } from "./post";
import { Card } from "~/components/card";
import { fetchPosts } from "./post";

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
        {posts.map(({ slug, title, body, published }) => (
          <a href={"./blog/" + slug}>
            <Card className="flex flex-row items-end overflow-clip pr-0 pb-0">
              <div className="min-w-0 grow overflow-hidden pr-4 pb-4">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="line-clamp-3">{body}</p>
              </div>
              {!published && (
                <div className="inline-block rounded-tl-md bg-[#1f2021] px-2 py-1 text-sm font-bold text-white">
                  Borrador
                </div>
              )}
            </Card>
          </a>
        ))}
      </div>
    </>
  );
}
