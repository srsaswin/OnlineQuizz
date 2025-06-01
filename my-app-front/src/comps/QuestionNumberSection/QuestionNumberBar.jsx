import { useState } from "react";
import QuestioneNumber from "./QuestioneNumber";
import QuestionNumberPlaceHolder from "./QuestionNumberPlaceHolder";

function QuestioneNumberBar({
  questionStatus,
  setQuestionStatus,
  currentQuestionNum,
  setCurrentQuestionNum,
  numOfQuestion,
  setNumOfQuestion
}) {

  function changeQNum(inx) {
    setCurrentQuestionNum(inx + 1);
  }

  return (
    <div className="question-box">
      <QuestioneNumber questionNum={currentQuestionNum}></QuestioneNumber>
      <div className="question-place-holders">
        {
          questionStatus.map((q, inx) => {
            return (
              <QuestionNumberPlaceHolder
                questionNum={inx + 1}
                setCurrentQuestionNumWithIsVisited={() => changeQNum(inx)}
              ></QuestionNumberPlaceHolder>
            )
          })
        }
      </div>
    </div>
  );
}

export default QuestioneNumberBar;
