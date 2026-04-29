import styled from "styled-components";
import Heading from "./Heading";
import Logout from "../features/authentication/LogoutButton";

const StyledHeader = styled.header`
  padding: 1.6rem 4.8rem;
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);
`;
function Header() {
  return (
    <StyledHeader>
      <Logout />
      <Heading as="h1">Header</Heading>
    </StyledHeader>
  );
}

export default Header;
