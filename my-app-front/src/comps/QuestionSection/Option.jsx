function Option({ optionNumber, optionData, selectOption, status }) {
  return (
    <div
      class="option"
      onClick={selectOption}
      style={{
        color: optionNumber === status.lockedOption ? "green" : "black",
      }}
    >
      <div>{optionData}</div>
    </div>
  );
}
export default Option;
