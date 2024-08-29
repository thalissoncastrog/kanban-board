import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/authentication/firebaseConfig";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode; // Tipo para componentes filhos
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!user) {
    // Se o usuário não está autenticado, redirecione para a página de login
    return <Navigate to="/" />;
  }

  // Se o usuário está autenticado, renderize o componente filho
  return <>{children}</>;
}
