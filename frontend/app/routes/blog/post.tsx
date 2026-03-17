import { useEffect, useState } from "react";

import type { Route } from "./+types/post";
import Footer from "~/components/footer";

interface Post {
  title: string;
  body: string;
  slug: string;
}

interface BackendError {
  message: string;
}

export default function Blog({ params: { slug } }: Route.ComponentProps) {
  const [post, setPosts] = useState<Post | BackendError>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/posts/" + slug)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts as Post);
      })
      .catch((err) => {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          console.error(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return "Cargando...";
  }

  if (error) {
    return "Hubo un error: " + error;
  }

  if (!post) {
    return "No encontrado";
  }

  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        {/* // BackendError */}
        {"message" in post ? (
          post.message
        ) : (
          <>
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="line-clamp-3">{post.body}</p>
          </>
        )}
        <a href="/blog" className="underline">Volver</a>
      </div>
      <Footer />
    </>
  );
}
