import { useState } from "react";
import QuestioneNumberBar from "./QuestionNumberSection/QuestionNumberBar";
import QuizzPaga from "./QuestionSection/QuizzPage";

function QQtag({ contestName }) {
  const [currentQuestionNum, setCurrentQuestionNum] = useState(1);
  const [numOfQuestion, setNumOfQuestion] = useState(1);
  const [questionStatus, setQuestionStatus] = useState(
    [
      {
        question: "",
        options: []
      }
    ]
  );

  function getDT(){
    const time = prompt("enter time in 24Hr :- eg 21:00").split(":");
    const day = prompt("Enter day :- eg 22.08.2005").split(".");
    
    const d = new Date();
    d.setHours(time[0],time[1]);
    d.setFullYear(day[2],day[1],day[0]);

    return d.toUTCString();
    
  }

  function saveTest() {
    const userData = JSON.parse(document.cookie)[0];


    fetch(
      "http://localhost:9090/uploadcontest",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            "username": userData.username,
            "contestName": contestName,
            "duration":{
              start: String(getDT()),
              end : String(getDT())
            },
            "questionStatus": questionStatus
          }
        )
      }
    )
      .then(d => d.json())
      .then(d => {
        if (d.ok) navigation.back();
      })
      .catch((err) => console.log("invalied contest entry"));
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 0, padding: "10px" }}>
        <QuestioneNumberBar
          questionStatus={questionStatus}
          setQuestionStatus={setQuestionStatus}
          currentQuestionNum={currentQuestionNum}
          setCurrentQuestionNum={setCurrentQuestionNum}
          numOfQuestion={numOfQuestion}
          setNumOfQuestion={setNumOfQuestion}
        />
      </div>
      <div style={{ width: "5px", background: "#ccc" }} />{" "}
      {/* simple splitter */}
      <div style={{ flex: 3, padding: "10px" }}>
        <QuizzPaga
          questionStatus={questionStatus}
          setQuestionStatus={setQuestionStatus}
          currentQuestionNum={currentQuestionNum}
          setCurrentQuestionNum={setCurrentQuestionNum}
          saveTest={saveTest}
        />
      </div>
    </div>
  );
}

export default QQtag;
