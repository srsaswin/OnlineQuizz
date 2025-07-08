import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function StartContest() { 
    const [contest,setCntest] = useState({});
    const nav = useNavigate();
    function check(e){  
        const len = "6862d602afb2c496a868a09a".length;
        if(e.target.value.length == len){
            console.log("test")
            fetch(`http://localhost:9090/contest/${e.target.value}`)
            .then(r => r.json())
            .then(r => {  
            if(r.ok) document.getElementById("start-button").style.background = 'blue';
            localStorage.setItem("^%*(*^&#",JSON.stringify(r.payload));
            console.log(r);
        })
        } 
    }
  return (
    <div>
        <div>{ 
            }
            <input type='text' onChange={(e)=>check(e)} ></input>
            <button id="start-button" onClick={(e)=>{
                if(e.target.style.background == "blue") nav("/TTcontest")
            }} style={{background:"lightblue"}}  >start</button>
        </div>
    </div>
  )
}

export default StartContest