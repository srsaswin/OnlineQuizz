import React, { useEffect, useState } from 'react'
import QQtag from '../QQtag'

function NewContest() {

    const [contestData, setContestData] = useState("");

    // useEffect(()=>{   -> no need we can use onKeyDown;
    //     document.getElementById("name-input").addEventListener("keydown",function(e){
    //         if(e.key == "Enter") doneName();
    //     })
    // },[])

    function doneName() {
        const name = document.getElementById('contestname').value;
        if (!name) alert("enter a name");
        else {
            setContestData(name);
            document.getElementById("question-adder").innerText = name;
            document.getElementById('qustion-entry').style.display = 'block';
            document.getElementById('name-input').style.display = "none";
        }
    }

    return (
        <div>
            <div id='name-input'
                onChange={(e) => setContestData}
                onKeyDown={(e) => {
                    if (e.key == "Enter") doneName();
                }}>
                name of the contest
                <input id='contestname' type='text' placeholder='enter ' ></input>
                <button onClick={doneName}>✅</button>
            </div>
            <div id='qustion-entry' style={{ display: 'none' }}>
                <div id="question-adder">
                </div>
                <div >
                    <QQtag contestName={contestData}></QQtag>
                </div>
            </div>
        </div>
    )
}

export default NewContest