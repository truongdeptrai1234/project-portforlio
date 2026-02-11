import { createContext, useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import useCloseModalByOutsideClick from "../hooks/useCloseModalByOutsideClick";

const StyledMenu = styled.div`
  padding: 0 0.6rem;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: absolute;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  z-index: 1200;
  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;
const MenuContext = createContext();
function Menu({ children }) {
  const [activeMenu, setActiveMenu] = useState(false);
  const [currentEleWithMenu, setCurEleWithMenu] = useState({});
  return (
    <MenuContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        currentEleWithMenu,
        setCurEleWithMenu,
      }}
    >
      <StyledMenu>{children}</StyledMenu>
    </MenuContext.Provider>
  );
}
function Button({ children, icon, onClick }) {
  const { setActiveMenu, currentEleWithMenu } = useContext(MenuContext);
  function cabinRowMenuListButtonHandler() {
    setActiveMenu(false);
    onClick(+currentEleWithMenu.ele.dataset.id);
  }
  return (
    <li>
      <StyledButton onClick={cabinRowMenuListButtonHandler}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}
function Toggle({ children, itemId }) {
  const { setActiveMenu, setCurEleWithMenu, currentEleWithMenu } =
    useContext(MenuContext);
  const toggleRef = useRef();
  const { id } = currentEleWithMenu.ele ? currentEleWithMenu.ele.dataset : {};

  function handleToggle() {
    const rect = toggleRef.current.getBoundingClientRect();
    setCurEleWithMenu(() => ({
      ele: toggleRef.current.closest("div"),
      position: { x: (rect.right - rect.left) / 4, y: rect.height },
    }));

    if ((id && itemId !== +id) || itemId === +id)
      setActiveMenu((prev) => !prev);

    if (+id !== itemId) setActiveMenu(true);
  }
  return (
    <StyledToggle onClick={handleToggle} ref={toggleRef} data-id={itemId}>
      {children}
    </StyledToggle>
  );
}
function List({ children }) {
  const {
    activeMenu,
    currentEleWithMenu,
    setActiveMenu: closeMenu,
  } = useContext(MenuContext);
  const { modalRef: menuCabinRef } = useCloseModalByOutsideClick(
    null,
    closeMenu,
  );
  if (!activeMenu || !currentEleWithMenu.ele) return null;

  return createPortal(
    <StyledList ref={menuCabinRef} position={currentEleWithMenu.position}>
      {children}
    </StyledList>,
    currentEleWithMenu.ele,
  );
}
Menu.Button = Button;
Menu.Toggle = Toggle;
Menu.List = List;
export default Menu;
