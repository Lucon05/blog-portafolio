import { useEffect, useState } from "react";
import { Link } from "react-router";

import type { Route } from "./+types/post";
import type { Post } from "./fetchPost";
import { useAuth } from "~/lib/auth";
import { fetchPost } from "./fetchPost";

export default function Blog({ params: { slug } }: Route.ComponentProps) {
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    fetchPost(slug)
      .then((post) => {
        setPost(post);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return "Cargando...";
  }

  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        {error && "Hubo un error: " + error}
        {post && (
          <>
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="line-clamp-3">{post.body}</p>
          </>
        )}
        {isAuthenticated && (
          <Link to={"/admin/edit-post/" + slug} className="underline">
            Editar
          </Link>
        )}
        <Link to="/blog" className="underline">
          Volver
        </Link>
      </div>
    </>
  );
}
