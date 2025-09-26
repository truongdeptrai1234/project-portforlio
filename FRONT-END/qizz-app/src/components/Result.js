import Button from "./Button";

function Result({ currentScore, onRestart, timeUsed }) {
  return (
    <section className="result">
      <h2>Congratulation! You have complete the quizz 🎉🎉🎉</h2>
      <p>Your score: {currentScore}</p>
      <p>
        Total time: {Math.floor(timeUsed / 60)}:
        {Number(Math.floor(timeUsed % 60))
          .toString()
          .padStart(2, "0")}
      </p>
      <Button onClickHandle={onRestart}>Restart</Button>
    </section>
  );
}

export default Result;
