import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Sidebar from "./Sidebar";
const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;
const StyledMain = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  background-color: var(--color-grey-50);
  overflow-y: auto;
  scrollbar-gutter: stable both-edges;
`;
const Container = styled.div`
  max-width: 80rem;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function AppLayout() {
  return (
    <StyledLayout>
      <Header />
      <Sidebar />
      <StyledMain>
        <Container>
          <Outlet />
        </Container>
      </StyledMain>
    </StyledLayout>
  );
}

export default AppLayout;
