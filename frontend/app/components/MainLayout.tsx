import { Outlet } from "react-router";

import { AuthProvider } from "~/lib/auth";
import Footer from "./footer";

export default function MainLayout() {
  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col">
        
        <main className="flex-grow">
          <Outlet />
        </main>
        
        <Footer className="flex w-full flex-col items-center bg-[#722F37] text-[#f5f5dc] py-8" />
      </div>
    </AuthProvider>
  );
}

