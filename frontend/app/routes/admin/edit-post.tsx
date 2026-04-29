import { useEffect, useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router";

import type { Route } from "./+types/edit-post";
import Button from "~/components/Button";
import Input from "~/components/Input";
import { Textarea } from "~/components/textarea";
import { deletePost, fetchPost, putPost } from "../blog/post";

export default function EditPost({ params: { slug } }: Route.ComponentProps) {
  const [postData, setPostData] = useState({
    title: "",
    body: "",
    published: false,
  });
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    fetchPost(slug)
      .then((post) => {
        setPostData(post);
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

  async function savePost() {
    try {
      setError(null);
      setSubmitting(true);
      const res = await putPost(postData, slug);
      await navigate("/admin/edit-post/" + res.slug, { replace: true });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }

      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  async function removePost() {
    const confirmed = confirm(
      "Estas seguro de que quieres eliminarlo? Esta accion es irreversible",
    );

    if (!confirmed) return;

    try {
      setError(null);
      setSubmitting(true);
      await deletePost(slug);
      await navigate("/admin");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }

      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>Edit Post</h1>
      <Input
        value={postData.title}
        onChange={(event) =>
          setPostData({ ...postData, title: event.target.value })
        }
        label="Title:"
      ></Input>
      <Textarea
        value={postData.body}
        onChange={(event) =>
          setPostData({ ...postData, body: event.target.value })
        }
        label="Body:"
      ></Textarea>
      <FormControlLabel
        control={
          <Checkbox
            checked={postData.published}
            onChange={(event) =>
              setPostData({ ...postData, published: event.target.checked })
            }
          />
        }
        label="Published"
      />
      {error && <span className="text-red-500">Error: {error}</span>}
      <Button onClick={savePost} disabled={submitting}>
        Save
        
      </Button>
      <Button className="pb-"
      onClick={removePost} disabled={submitting} variant="danger">
        Delete
      </Button>
    </div>
  );
}
