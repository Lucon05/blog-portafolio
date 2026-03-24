 
import { Link } from "react-router";
import Button from "~/components/Button";
import { Card } from "~/components/card";
import { useAuth } from "~/lib/auth";

export default function AdminPage() {
  const { logout } = useAuth();
  
  
  return (
    <Card className="p-2 flex flex-col gap-2">
      <h1>Admin</h1>
      <Link to="/admin/new-post" className="underline">Crear nuevo post</Link>
      <Button className="my-2" onClick={() => void logout()}>
        Cerrar sesión
      </Button>
    </Card>
  );
}
