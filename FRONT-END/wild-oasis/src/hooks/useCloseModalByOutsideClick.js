import { useEffect, useRef } from "react";

function useCloseModalByOutsideClick(nameWindow, callBack) {
  const modalRef = useRef(null);
  useEffect(() => {
    function clickHandler(e) {
      if (!modalRef.current) return;
      if (!modalRef?.current?.contains(e.target))
        callBack((prev) => ({ ...prev, [nameWindow]: false }));
    }
    document.body.addEventListener("click", clickHandler, true);
    return () => {
      document.body.removeEventListener("click", clickHandler);
    };
  }, [nameWindow, callBack]);

  return { modalRef };
}

export default useCloseModalByOutsideClick;
