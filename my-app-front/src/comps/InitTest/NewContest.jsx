import React, { useState } from 'react'
import QQtag from '../QQtag'

function NewContest() {

    const [contestData, setContestData] = useState({});
    function doneName() {
        const name = document.getElementById('contestname').value;
        if (!name) alert("enter a name");
        else {
            contestData.name = name;
            contestData.questions = []; 
            document.getElementById("question-adder").innerText = name;
            document.getElementById('qustion-entry').style.display = 'block';
            document.getElementById('name-input').style.display = "none";
            console.log(contestData);
        }
    }

    return (
        <div>
            <div id='name-input'>
                name of the contest
                <input id='contestname' type='text' placeholder='enter ' ></input>
                <button onClick={doneName}>✅</button>
            </div>
            <div id='qustion-entry' style={{display:'none'}}>
            <div id="question-adder"> 
            </div>
            <div >
                <QQtag></QQtag>
            </div>
            </div>
        </div>
    )
}

export default NewContest