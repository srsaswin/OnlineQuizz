import Option from "./Option";

function QuizzQuestionPaga({
  inx,
  question,
  options,
  status,
  setQuestionStatus,
}) {
  function lockAnswer(num) {
    const updatedStatus = [...status];
    updatedStatus[inx] = {
      ...updatedStatus[inx],
      isAnswered: true,
      lockedOption: num,
    };
    setQuestionStatus(updatedStatus);
  }

  return (
    <div>
      <div class="question">{question}</div>
      <div class="options">
        {Array.from({ length: options.length }).map((_, option) => (
          <Option
            optionNumber={option + 1}
            optionData={options[option]}
            selectOption={() => lockAnswer(option + 1)}
            status={status[inx]}
          />
        ))}
      </div>
    </div>
  );
}
export default QuizzQuestionPaga;
