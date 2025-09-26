import { useEffect, useReducer } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Main from "./components/Main";
import Progress from "./components/Progress";
import QuestionList from "./components/QuestionList";
import QuestionTimerAndSwitch from "./components/QuestionTimerAndSwitch";
import Timer from "./components/Timer";
import "./index.css";
import Welcome from "./components/Welcome";
import Result from "./components/Result";
import Loader from "./components/Loader";

// http://localhost:8000/questions API question end-point

const initialSate = {
  questionData: [],
  error: "",
  isAnswer: false,
  currentQuestion: 0,
  isStart: false,
  isSelected: null,
  currentScore: 0,
  isFinished: false,
  totalTime: 230, //seconds
  timeUsed: 0, // seconds
  isLoading: true,
};
function reducer(state, action) {
  switch (action.type) {
    case "setQuestion":
      return { ...state, questionData: action.payload, isLoading: false };
    case "setError":
      return { ...state, error: action.payload, isLoading: false };
    case "resetError":
      return { ...state, error: "" };
    case "nextQues":
      if (state.currentQuestion === state.questionData.length) return state;
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        isAnswer: false,
        isSelected: null,
      };
    case "setStart":
      return { ...state, isStart: true };
    case "setSelected":
      return {
        ...state,
        isSelected: action.payload,
        isAnswer: true,
        currentScore:
          state.currentScore +
          (action.payload ===
          state.questionData[state.currentQuestion].correctOption
            ? state.questionData[state.currentQuestion].points
            : 0),
      };
    case "restart":
      return {
        ...initialSate,
        questionData: state.questionData,
        isLoading: false,
      };
    case "finished":
      return { ...state, isFinished: true };
    case "tick":
      return {
        ...state,
        totalTime: state.totalTime - action.payload,
        timeUsed: state.timeUsed + action.payload,
      };
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialSate);

  useEffect(() => {
    async function getQuestionListData() {
      try {
        dispatch({ type: "resetError" });
        const res = await fetch("http://localhost:8000/questions");
        //API question end-point"
        if (!res.ok)
          throw new Error(
            "Something went wrong!. Check your connection or comeback later"
          );
        const data = await res.json();
        dispatch({ type: "setQuestion", payload: data });
      } catch (error) {
        dispatch({ type: "setError", payload: error.message });
      }
    }
    getQuestionListData();
  }, []);
  if (state.error) return <h2>{state.error}.Try again later</h2>;
  if (state.isLoading)
    return (
      <>
        <Header />
        <Main>
          <Loader />
        </Main>
      </>
    );
  return (
    <div className="App">
      <Header />

      {!state.isStart ? (
        <Welcome
          quesAmount={state.questionData.length}
          handleStartQuizz={dispatch.bind(null, { type: "setStart" })}
        />
      ) : !state.isFinished ? (
        <>
          <Progress
            value={state.currentQuestion + 1}
            max={state.questionData.length}
            currentScore={state.currentScore}
          />
          <Main>
            <QuestionList
              data={state.questionData[state.currentQuestion]}
              isAnswer={state.isAnswer}
              setSelected={dispatch}
              isSelected={state.isSelected}
              isFinished={state.isFinished}
            />
            <QuestionTimerAndSwitch>
              {state.totalTime < 0 ? (
                <>
                  <h3>Time run out !</h3>
                  <Button
                    onClickHandle={dispatch.bind(null, {
                      type: "finished",
                    })}
                  >
                    See result
                  </Button>
                </>
              ) : (
                <>
                  <Timer totalTime={state.totalTime} timerStart={dispatch} />
                  {state.currentQuestion < state.questionData.length - 1 &&
                    state.isAnswer && (
                      <Button
                        onClickHandle={dispatch.bind(null, {
                          type: "nextQues",
                        })}
                      >
                        Next
                      </Button>
                    )}
                  {state.currentQuestion === state.questionData.length - 1 &&
                    state.isAnswer && (
                      <Button
                        onClickHandle={dispatch.bind(null, {
                          type: "finished",
                        })}
                      >
                        See result
                      </Button>
                    )}
                </>
              )}
            </QuestionTimerAndSwitch>
          </Main>
        </>
      ) : (
        <Result
          currentScore={state.currentScore}
          onRestart={dispatch.bind(null, { type: "restart" })}
          timeUsed={state.timeUsed}
        />
      )}
    </div>
  );
}

export default App;
