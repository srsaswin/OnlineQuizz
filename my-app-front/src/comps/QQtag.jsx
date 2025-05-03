import { useState } from "react";
import QuestioneNumberBar from "./QuestionNumberSection/QuestionNumberBar";
import QuizzPaga from "./QuestionSection/QuizzPage";

function QQtag() {
  const [currentQuestionNum, setCurrentQuestionNum] = useState(1);
  const [numOfQuestion, setNumOfQuestion] = useState(1);
  const [questionStatus, setQuestionStatus] = useState(
    [
      {
        question:"DEMO",
        options:[]
      }
    ]
  );

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 0, padding: "10px" }}>
        <QuestioneNumberBar
          questionStatus={questionStatus}
          setQuestionStatus={setQuestionStatus}
          currentQuestionNum={currentQuestionNum}
          setCurrentQuestionNum={setCurrentQuestionNum}
          numOfQuestion={numOfQuestion}
          setNumOfQuestion={setNumOfQuestion}
        />
      </div>
      <div style={{ width: "5px", background: "#ccc" }} />{" "}
      {/* simple splitter */}
      <div style={{ flex: 3, padding: "10px" }}>
        <QuizzPaga
          questionStatus={questionStatus}
          setQuestionStatus={setQuestionStatus}
          currentQuestionNum={currentQuestionNum}
          setCurrentQuestionNum={setCurrentQuestionNum}
        />
      </div>
    </div>
  );
}

export default QQtag;
