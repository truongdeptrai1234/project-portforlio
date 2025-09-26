import Question from "./Question";

function QuestionList({ data, isAnswer, setSelected, isSelected }) {
  if (!data) return;
  return (
    <dl className="question-list">
      <Question
        key={data.id}
        ques={data.question}
        ansOpt={data.options}
        correct={data.correctOption}
        isAnswer={isAnswer}
        setSelected={setSelected}
        isSelected={isSelected}
      />
    </dl>
  );
}

export default QuestionList;
