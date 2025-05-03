import { useEffect, useState } from "react";
import Option from "./Option";

function QuizzQuestionPaga({
  inx,
  question,
  options,
  status,
  setQuestionStatus,
}) {
  // function lockAnswer(num) {
  //   const updatedStatus = [...status];
  //   updatedStatus[inx] = {
  //     ...updatedStatus[inx],
  //     isAnswered: true,
  //     lockedOption: num,
  //   };
  //   setQuestionStatus(updatedStatus);
  // }

  const [opt,setOpt] = useState()

  function addOption() {
    const option = prompt("enter your option");
    if(option){
      options.push(option); 
      setOpt();
    }
  }

   
  return (
    <div>
      <div>
        <div class="question">{question}</div>
        <div class="options">
          {Array.from({ length: opt.length }).map((_, option) => (
            <Option
              optionData={opt[option]}
              // selectOption={}
              // status={status[inx]}
            />
          ))}
          <Option
            optionData={'➕'}
            selectOption={addOption}
          >
          </Option>
        </div>
      </div>
    </div>
  );
}
export default QuizzQuestionPaga;
