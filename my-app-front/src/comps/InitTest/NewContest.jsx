import React, { useState } from 'react'

function NewContest() {

    const [contestData, setContestData] = useState({});
    function doneName(){
        const name = document.getElementById('contestname').value;
        if(!name) alert("enter a name");
        else{
            contestData.name = name;
            console.log(contestData);
        }
    }

    return (
        <div>
            <div>
                name of the contest
                <input id='contestname' type='text' placeholder='enter ' ></input>
                <button onClick={doneName}>✅</button>
            </div>
        </div>
    )
}

export default NewContest