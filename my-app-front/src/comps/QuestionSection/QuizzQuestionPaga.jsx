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

  const [opt, setOpt] = useState([])

  useEffect(() => {
    document.getElementById("textarea1").value = status.question;
    setOpt(options);
  }, [options])

  function addOption() {

    const option = prompt("enter your option");
    if (option) {
      options.push(option);
      const newOptions = [...opt, option];
      setOpt(newOptions);
    }
  }




  return (
    <div>
      <div>
        <div className="question">
          <textarea id="textarea1" placeholder={"enter qustion"} onChange={(e) => {
            status.question = e.target.value;
          }
          }></textarea>
        </div>
        <div class="options">
          {
            options.map((a, inx) => {
              return (
                <Option
                  key={inx + 1}
                  optionData={a}
                >
                </Option>
              )
            })
          }
          <Option
            key={0}
            optionData={'➕'}
            selectOption={addOption}
          >
          </Option>
          currectOption : { }
          <input id="currectOption" type="number"
            onChange={(e) => {
              status.correctOption = e.target.value;
            }}
          ></input>
        </div>
      </div>
    </div>
  );
}
export default QuizzQuestionPaga;
