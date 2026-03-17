    import { useEffect, useState } from "react";

import Footer from "~/components/footer";
import { Card } from "~/components/card";

interface Post {
  title: string;
  body: string;
  slug: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts as Post[]);
      })
      .catch((err) => {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            console.error(err)
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return "Cargando..."
  }

  if (error) {
    return "Hubo un error: " + error
  }

  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        {posts.map(({slug, title, body}) => (
           <a href={"./blog/" + slug}>
      <Card>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="line-clamp-3">{body}</p>
      </Card>
    </a>
        ))}
      </div>
      <Footer />
    </>
  );
}
