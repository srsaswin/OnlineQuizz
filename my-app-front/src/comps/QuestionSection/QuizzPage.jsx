import { useEffect } from "react";
import QuizzQuestionPaga from "./QuizzQuestionPaga";

function QuizzPaga({
  questionStatus,
  setQuestionStatus,
  currentQuestionNum,
  setCurrentQuestionNum,
  saveTest
}) {

  function isNotOk() {
    const currentQuestion = questionStatus[currentQuestionNum - 1];


    if (!currentQuestion.question) {
      alert("enter valied question!");
      return true;
    }

    if (!currentQuestion.correctOption || currentQuestion.correctOption === 0 || currentQuestion.correctOption > currentQuestion.options.length) {
      alert("invalied correctOption " + currentQuestion.correctOption);
      return true;;
    }
    return false;
  }

  function submit() {
    if (isNotOk()) return;
    saveTest();
  }



  function addQustion() {

    if (isNotOk()) return;

    const newQuestionStatus = [...questionStatus, {
      // key:'1',
      question: "",
      options: [],
      correctOption: null
    }];
    setQuestionStatus(newQuestionStatus);
    setCurrentQuestionNum(newQuestionStatus.length)
  }


  return (
    <div>
      <QuizzQuestionPaga
        inx={currentQuestionNum - 1}
        question={questionStatus[currentQuestionNum - 1].question}
        options={questionStatus[currentQuestionNum - 1].options}
        status={questionStatus[currentQuestionNum - 1]}
        setQuestionStatus={setQuestionStatus}
      />
      <div>
        <button onClick={addQustion}>
          next qustion
        </button>{currentQuestionNum != 0 &&
          <button onClick={submit}>
            submit
          </button>}
      </div>
    </div>
  );
}

export default QuizzPaga;
