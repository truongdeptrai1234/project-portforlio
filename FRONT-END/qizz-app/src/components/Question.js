import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
function Question({
  ques = "question",
  ansOpt = ["a", "b", "c", "d"],
  correct = 0,
  isAnswer,
  setSelected,
  isSelected,
}) {
  const curEle = useRef(null);
  useEffect(() => {
    const element = curEle.current;
    function getIndex(e) {
      if (isAnswer || !e.target.closest("dd")) return;
      setSelected({
        type: "setSelected",
        payload: +e.target.closest("dd").dataset.index,
      });
    }
    element.addEventListener("click", getIndex);
    return () => element.removeEventListener("click", getIndex);
  }, [setSelected, isAnswer]);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={ques.question}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        // transition={{ duration: 0.3 }}
        layout
        ref={curEle}
      >
        <dt>{ques}</dt>
        {ansOpt.map((item, index) => (
          <dd
            className={
              isAnswer
                ? index === correct
                  ? `${isSelected === index ? "true shift-right" : "true"}`
                  : `${isSelected === index ? "false shift-right" : "false"}`
                : ""
            }
            key={item}
            data-index={index}
            role="button"
          >
            {item}
          </dd>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default Question;
