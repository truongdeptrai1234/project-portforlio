import { useEffect } from "react";

function Timer({ totalTime = 200, timerStart }) {
  const hour =
    totalTime / 3600 < 1
      ? ""
      : Number(Math.floor(totalTime / 3600))
          .toString()
          .padStart(2, "0");
  const minute = Number(Math.floor((totalTime % 3600) / 60))
    .toString()
    .padStart(2, "0");
  const second = Number(Math.floor(totalTime % 60))
    .toString()
    .padStart(2, "0");

  useEffect(() => {
    const timeId = setInterval(() => {
      timerStart({ type: "tick", payload: 1 });
    }, 1000);
    return () => clearInterval(timeId);
  }, [timerStart]);
  return (
    <span className="timer">{`${
      hour ? hour + ":" : ""
    }${minute}:${second}`}</span>
  );
}

export default Timer;
