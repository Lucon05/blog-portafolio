import { createContext, useContext, useEffect, useState } from "react";

import { backendErrorSchema } from "./backendErrorSchema";

async function requestLogin(email: string, password: string) {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  const resBody = await res.json();

  if (!res.ok) {
    try {
      const parsedBody = backendErrorSchema.parse(resBody);
      throw new Error(parsedBody.message);
    } catch {
      throw new Error("Ocurrio un error desconocido");
    }
  }
}

async function requestLogout() {
  await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
}

async function requestCheckAuth(): Promise<boolean> {
  const res = await fetch("/api/auth/me", { credentials: "include" });
  return res.ok;
}

export const AuthContext = createContext<{
  isAuthenticated: null | boolean;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
}>({
  isAuthenticated: null,
  logout: async () => {
    /* empty */
  },
  login: async () => {
    /* empty */
  },
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null);

  useEffect(() => {
    requestCheckAuth()
      .then((isAuthenticated) => setIsAuthenticated(isAuthenticated))
      .catch((err) => console.error(err));
  }, []);

  async function logout() {
    await requestLogout();
    setIsAuthenticated(false);
  }

  async function login(email: string, password: string) {
    await requestLogin(email, password);
    setIsAuthenticated(true);
  }

  return (
    <AuthContext value={{ isAuthenticated, logout, login }}>
      {children}
    </AuthContext>
  );
}
