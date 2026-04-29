import { Navigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";

function PublicLoginRoute({ children }) {
  const { user, isPending } = useUser();
  if (isPending) return null;
  if (user) return <Navigate to="/" replace />;
  return children;
}

export default PublicLoginRoute;
