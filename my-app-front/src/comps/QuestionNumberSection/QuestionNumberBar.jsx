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
  function setCurrentQuestionNumWithIsVisited(num) {
    if (num === currentQuestionNum) return;
    const updateStatus = [...questionStatus];
    updateStatus[currentQuestionNum - 1] = {
      ...updateStatus[currentQuestionNum - 1],
      isVisited: true,
    };
    setQuestionStatus(updateStatus);
    setCurrentQuestionNum(num);
  }

  function addQuestion(){
    setNumOfQuestion(numOfQuestion + 1); 
  }

  return (
    <div class="question-box">
      <QuestioneNumber questionNum={currentQuestionNum}></QuestioneNumber>
      <div class="question-place-holders">
        {Array.from({ length: numOfQuestion }).map((_, x) => (
          <QuestionNumberPlaceHolder
            key={x + 1}
            questionNum={x + 1}
            setCurrentQuestionNumWithIsVisited={
              setCurrentQuestionNumWithIsVisited
            } 
          />
        ))}
        <div>
          <QuestionNumberPlaceHolder
            key={"adder"}
            questionNum={'➕'}
            setCurrentQuestionNumWithIsVisited={
              addQuestion
            }
          ></QuestionNumberPlaceHolder>
        </div>
      </div>
    </div>
  );
}

export default QuestioneNumberBar;
