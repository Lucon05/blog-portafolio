import { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router";

import Button from "~/components/Button";
import Input from "~/components/Input";
import { Textarea } from "~/components/textarea";
import { createPost } from "../blog/post";

export default function PutNewPost() {
  const [postData, setPostData] = useState({
    // se desectrustura el post data
    title: "",
    body: "",
    published: false,
  });
  const navigate = useNavigate(); //aqui hay 3 variables  una para navegar
  const [submitting, setSubmitting] = useState(false); //una para saber si el post se a subido o slo se guardo  pero mas adelante se hace una funcioon  que es savePost  //el usstates falso  porque despues puede cambiar de estado  si se publica o no en el checkbox
  const [error, setError] = useState<string | null>(null); // errors

  async function savePost() {
    try {
      setSubmitting(true);
      const res = await createPost(postData);
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

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>New Post</h1>
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
    </div>
  );
}
