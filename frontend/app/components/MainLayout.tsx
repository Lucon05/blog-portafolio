import { Outlet } from "react-router";

import { AuthProvider } from "~/lib/auth";
import Footer from "./footer";

export default function MainLayout() {
  return (
    <>
      <AuthProvider>
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
}
