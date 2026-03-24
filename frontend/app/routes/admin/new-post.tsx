import { useState } from "react"
import z from "zod"
import Input from "~/components/Input";
import { Textarea } from "~/components/textarea";

const postSchema = z.object({
  title: z.string(),
  body: z.string(),
  slug: z.string(),
});


export default function NewPost(){
      const [incertPost, setIncertPost] = useState(postSchema);
    
    useState
return(
    <div>
        <h1>New Post</h1>
        <Input>titulo</Input>
        <Textarea></Textarea>
        
    </div>
)
}

