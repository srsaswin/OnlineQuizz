function QuestionNumberPlaceHolder({
  questionNum,
  setCurrentQuestionNumWithIsVisited,
  status,
}) {
  return (
    <div
      class="question-place-holder"
      onClick={() => setCurrentQuestionNumWithIsVisited(questionNum)}
      style={{
        color: status.isAnswered ? "green" : status.isVisited ? "red" : "black",
      }}
    >
      <div>{questionNum}</div>
    </div>
  );
}

export default QuestionNumberPlaceHolder;
