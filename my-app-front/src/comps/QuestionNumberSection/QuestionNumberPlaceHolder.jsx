function QuestionNumberPlaceHolder({
  questionNum,
  setCurrentQuestionNumWithIsVisited,
}) {
  return (
    <div
      className="question-place-holder"
      onClick={setCurrentQuestionNumWithIsVisited}
    >
      <div>{questionNum}</div>
    </div>
  );
}

export default QuestionNumberPlaceHolder;
