import { Navigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import styled from "styled-components";
import Spinner from "../ui/Spinner";

const StyledPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ProtectedRoute({ children }) {
  const { user, isPending } = useUser();
  if (isPending)
    return (
      <StyledPage>
        <Spinner />
      </StyledPage>
    );
  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
}

export default ProtectedRoute;
