import {  useState } from "react";
import { Card } from "@mui/material";
import { Navigate, useNavigate } from "react-router";

import Button from "~/components/Button"; 
import Input from "~/components/Input"; 
import { cn } from "~/lib/cn";
import { useAuth } from "~/lib/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<null | string>(null);
  const {isAuthenticated, login} = useAuth();
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      await login(email, password);
      void navigate("/admin");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Ocurrio un error desconocido");
      }
    }
  }

  if (isAuthenticated === null) {
    return "Cargando sesion..."
  }

  if (isAuthenticated) {
    return <Navigate to={"/admin"} />;
  }

  return (
    <div className="">
      <Card className="mih-full bg-whiten-h-8/10 col mx-6 my-20 flex flex-col items-center justify-center gap-11 rounded-4xl pt-5">
        <h1 className="mt-5 py-5 text-center text-4xl">
          <b>login</b>{" "}
        </h1>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></Input>
        <Input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></Input>
        {error && <span className="text-red-500">Error: {error}</span>}
        <Button
          className={cn(
            "p10 h-10 w-15 rounded-2xl bg-amber-200 text-amber-950 hover:bg-red-100",
          )}
          onClick={handleLogin}
        >
          Start
        </Button>
      </Card>
    </div>
  );
}
