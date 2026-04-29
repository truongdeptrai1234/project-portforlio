import styled, { css } from "styled-components";
import ButtonIcon from "../ui/ButtonIcon";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: ${({ type = "horizontal" }) =>
    type === "vertical" ? "column" : "row"};
  align-items: ${({ type = "horizontal" }) =>
    type === "vertical" ? "flex-start" : "center"};
  gap: ${({ type = "horizontal" }) =>
    type === "vertical" ? "0.8rem" : "2.4rem"};

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 1rem;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  ${({ type = "horizontal" }) =>
    type === "horizontal" &&
    css`
      &:has(button) {
        justify-content: flex-end;
      }
      &:has(svg) {
        justify-content: flex-start;
      }
      &:has(button) div {
        display: flex;
        gap: 1.2rem;
      }

      &:nth-last-child(2) input[type="image"] {
        width: 180px;
      }

      & textarea {
        width: auto;
      }
    `}

  ${({ type = "horizontal" }) =>
    type === "vertical" &&
    css`
      & input,
      & select,
      & textarea,
      & button {
        width: 100%;
      }
    `}
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
const ChildrenWrapper = styled.div`
  position: relative;
  width: ${({ type = "horizontal" }) =>
    type === "horizontal" ? "auto" : "100%"};
  & button:has(span) {
    position: absolute;
    right: 0.4rem;
    top: 50%;
    transform: translateY(-50%);
    width: 3.2rem;
    height: 3.2rem;
  }
`;
const Label = styled.label`
  font-weight: 500;
  flex: ${({ type = "horizontal" }) =>
    type === "vertical" ? "none" : "0 0 24rem"};
`;

function FormRow({
  label,
  children,
  errors,
  type = "horizontal",
  toggleOnclick,
}) {
  console.log(children.props.id?.includes("password"));
  return (
    <StyledFormRow type={type}>
      {label && (
        <Label htmlFor={children.props.id} type={type}>
          {label}
        </Label>
      )}
      <ChildrenWrapper type={type}>
        {children}
        {(children.props.type === "password" ||
          children.props.id?.includes("password")) && (
          <ButtonIcon
            type="button"
            onClick={() => toggleOnclick?.((prev) => !prev)}
          >
            <span>
              {children.props.type === "password" ? (
                <BiSolidHide />
              ) : (
                <BiSolidShow />
              )}
            </span>
          </ButtonIcon>
        )}
      </ChildrenWrapper>
      {errors && <Error>{errors}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
