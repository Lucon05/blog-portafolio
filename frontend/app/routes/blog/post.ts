import z from "zod/v4";

import { backendErrorSchema } from "~/lib/backendErrorSchema";

const postSchema = z.object({                // esquema 
  title: z.string(),
  body: z.string(),
  slug: z.string(),
  published: z.boolean(),
});

export type Post = z.infer<typeof postSchema>;   // se usa en post.tsx es un alias 

function backendErrorHandler(res: Response, body: unknown) {   // manejo de errores   // se usa en varios lugares 
  if (!res.ok) {                                                 // si algo no esta bien  revisa el body toma ese error y lo imprime en la consola como "Error desconocido"
    try {
      const backendError = backendErrorSchema.parse(body);    
      throw new Error(backendError.message);            
    } catch (err) {
      console.error(err);
      throw new Error("Error desconocido");
    }
  }
}



export async function fetchPost(slug: string) {         // esto toma la informacion  del slug en la BD y sela pasa al frontend   
  const res = await fetch("/api/posts/" + slug);        //  y asi tener la pagina de la publicacion unica
  const body = await res.json();                                

  backendErrorHandler(res, body);

  return postSchema.parse(body);              
}



export async function fetchPosts() {                      // esto toma la informacion  del slug en la BD y sela pasa al frontend 
  const res = await fetch("/api/posts");                  //  y asi tener la pagina del index donde estan todas las publicaicones
  const body = await res.json();

  backendErrorHandler(res, body);

  return postSchema.array().parse(body);     // te devuel index/blog
}



////
export async function createPost(postData: {      // crear post:  se usa en new-post.tsx tambien  porque tiene una logica parecida en edit-post.tsx
  title: string;
  body: string;
  published: boolean;
}) {
  const res = await fetch("/api/posts", {      
    method: "POST",       //se llama la api  y se usa  metodo post para hacer la accion de postear
    headers: {
      "Content-Type": "application/json",       //se le ecpesifica al servidor que un formato json
    },
    body: JSON.stringify(postData),   //json to -string
  });
  const body = await res.json();  // esta varaible guarda en la BD

  backendErrorHandler(res, body);

  return postSchema.parse(body); // y al se retorna  como el como el esquema de sod de arriba porque aplico em methodo post que tiene el slugify y lecra el slug de una ves
}


/////
export async function putPost(  // editar post
  postData: {
    title: string;
    body: string;
    published: boolean;
  },
  slug: string,                            //// esto funciona muy parecido al otro al de crar peroya tenemos el slug
) {
  const res = await fetch("/api/posts/" + slug, {   //sellama desde exactamente ese slug a la api y usamos el methodo put que es la encargada de editar
    method: "PUT",                                  //la publicacion  y si cambia algo en el titulo tambien tiene la funcion de slugify incluida para cambiar el eslug de una 
    headers: {                                        //mas que editar lo que hace es actualizar los valores de la ta bla en BD
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  const body = await res.json();

  backendErrorHandler(res, body);

  return postSchema.parse(body);
}


////
export async function deletePost(slug: string) {      //eliminar post
  const res = await fetch("/api/posts/" + slug, {       //se  llama desde exactamente ese  slug a la api y usamos el methodo delete eliminar datos 
    method: "DELETE",
  });

  if (res.status !== 204) {
    const body = await res.json();            // aqui si no esta basio pues que mande el error  de arriba 
    backendErrorHandler(res, body);
  }
}
