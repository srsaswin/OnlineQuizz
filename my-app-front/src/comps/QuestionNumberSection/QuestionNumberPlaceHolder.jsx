function QuestionNumberPlaceHolder({
  questionNum,
  setCurrentQuestionNumWithIsVisited,
}) {
  return (
    <div
      class="question-place-holder"
      onClick={() => setCurrentQuestionNumWithIsVisited(questionNum)} 
    >
      <div>{questionNum}</div>
    </div>
  );
}

export default QuestionNumberPlaceHolder;
