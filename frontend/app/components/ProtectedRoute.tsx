import { Navigate, Outlet } from "react-router";

import { useAuth } from "~/lib/auth";

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) {
    return "Cargando sesion...";
  }

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  } else {
    return <Outlet />;
  }
}
