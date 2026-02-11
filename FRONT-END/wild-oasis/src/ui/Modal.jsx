import styled from "styled-components";
import { createPortal } from "react-dom";
import { cloneElement, createContext, useContext, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import useCloseModalByOutsideClick from "../hooks/useCloseModalByOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1200;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;
const ModalContext = createContext();

export default function Modal({ children }) {
  const [isOpen, setIsOpen] = useState({});
  const [windowId, setWindowId] = useState("");
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, windowId, setWindowId }}>
      {children}
    </ModalContext.Provider>
  );
}
function Open({ children, name }) {
  const { setIsOpen: open, setWindowId } = useContext(ModalContext);

  return cloneElement(children, {
    //id params come from menus button component
    onClick: (id) => {
      children.props.onClick?.(); //if clone has onClick run it first
      setWindowId(id);
      open((prev) => ({ ...prev, [name]: true }));
    },
  });
}

function Window({ children, nameWindow, id }) {
  const { isOpen, setIsOpen: close, windowId } = useContext(ModalContext);
  const { modalRef } = useCloseModalByOutsideClick(nameWindow, close);

  if (!isOpen[nameWindow]) {
    return null;
  }
  if (id && id !== windowId) return null;
  return createPortal(
    <Overlay>
      <StyledModal ref={modalRef}>
        <Button
          onClick={() => close((prev) => ({ ...prev, [nameWindow]: false }))}
        >
          <HiXMark />
        </Button>
        {cloneElement(children, {
          onClose: () => close((prev) => ({ ...prev, [nameWindow]: false })),
        })}
      </StyledModal>
    </Overlay>,
    document.body,
  );
}
Modal.Open = Open;
Modal.Window = Window;
