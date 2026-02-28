import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.div`
  grid-row: 1 / -1;
  padding: 1.5rem 1.2rem;
  border-right: 1px solid var(--color-grey-200);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;
