import { useEffect } from "react";
import QuizzQuestionPaga from "./QuizzQuestionPaga";

function QuizzPaga({
  questionStatus,
  setQuestionStatus,
  currentQuestionNum,
  setCurrentQuestionNum,
}) {
  function setPageNumberAndVisited(num, action) {
    const updataStatus = [...questionStatus];
    updataStatus[currentQuestionNum - 1] = {
      ...updataStatus[currentQuestionNum - 1],
      isVisited: true,
    };
    setQuestionStatus(updataStatus);
    setCurrentQuestionNum(currentQuestionNum + num);
  }

  return (
    <div>
      <QuizzQuestionPaga
        inx={currentQuestionNum - 1}
        question={questionStatus[currentQuestionNum - 1].question}
        options={questionStatus[currentQuestionNum - 1].options}
        status={questionStatus}
        setQuestionStatus={setQuestionStatus}
      />
      {/* <div>
        <button
          class="next-button"
          style={{
            display:
              currentQuestionNum === questionStatus.length ? "none" : "block",
          }}
          onClick={() => setPageNumberAndVisited(1)}
        >
          next
        </button>

        <button
          class="submit-button"
          style={{
            display:
              currentQuestionNum !== questionStatus.length ? "none" : "block",
          }}
        >
          submit
        </button>

        <button
          class="pre-button"
          style={{ display: currentQuestionNum === 1 ? "none" : "block" }}
          onClick={() => setPageNumberAndVisited(-1)}
        >
          pre
        </button>
      </div> */}
    </div>
  );
}

export default QuizzPaga;
