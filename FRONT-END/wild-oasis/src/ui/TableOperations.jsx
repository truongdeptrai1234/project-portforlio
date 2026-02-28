import styled, { css } from "styled-components";

const TableOperations = styled.div`
  display: flex;
  ${({ flex }) =>
    flex === "vertical"
      ? css`
          flex-direction: column;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.4rem;
          align-items: end;
        `
      : css`
          align-items: center;
          gap: 1.6rem;
          padding: 0.4rem;
        `}
`;

export default TableOperations;
