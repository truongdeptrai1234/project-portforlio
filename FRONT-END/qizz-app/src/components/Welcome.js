import Button from "./Button";

function Welcome({ quesAmount, handleStartQuizz }) {
  return (
    <section className="welcome">
      <h2>Welcome to react quizz</h2>
      <p>{quesAmount} question ready for you to test your knowledges</p>
      <Button onClickHandle={handleStartQuizz}>Lets start</Button>
    </section>
  );
}

export default Welcome;
