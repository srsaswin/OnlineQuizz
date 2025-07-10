import React, { useEffect, useRef, useState } from 'react' 
import ContestHeader from './TTcompcluster/ContestHeader';

function TTpage() {

   
    const [questions,setquestions]=useState({});
    const [qNUm,setQnum] = useState(0); 

    useEffect(()=>{
        const testContest = localStorage.getItem('^%*(*^&#');
        setquestions(JSON.parse(testContest))
        console.log(questions)
    },[]);
//questionStatus
    function submit(){
      console.log("submitt")
    }
  return (
    <div>
      <ContestHeader name={questions.contestName} time={3} submit={submit}></ContestHeader>
    </div>
  )
}

export default TTpage