import { useEffect, useRef } from "react";

function useCloseModalByOutsideClick(nameWindow = null, callBack) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleModal = (prev) => ({ ...prev, [nameWindow]: false });
    const handleMenuList = () => false;
    function clickHandler(e) {
      if (!modalRef?.current) return;
      if (
        !modalRef?.current?.contains(e.target) &&
        !e.target.closest("button")?.dataset.id
      )
        callBack(nameWindow ? handleModal : handleMenuList);
    }
    document.body.addEventListener("click", clickHandler, true);
    return () => {
      document.body.removeEventListener("click", clickHandler, true);
    };
  }, [nameWindow, callBack]);

  return { modalRef };
}

export default useCloseModalByOutsideClick;
