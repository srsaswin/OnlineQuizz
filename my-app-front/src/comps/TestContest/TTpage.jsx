import React, { useEffect, useRef, useState } from 'react' 
import ContestHeader from './TTcompcluster/ContestHeader';
import ContestQuestionNumber from './TTcompcluster/ContestQuestionNumber';
import ContestQuestion from './TTcompcluster/ContestQuestion';

function TTpage() {

   
    const [questions,setquestions]=useState(JSON.parse(localStorage.getItem('^%*(*^&#')));
    const [qNUm,setQnum] = useState(1); 
    const [qStatus,setQuestionStatus] = useState([]);



    useEffect(()=>{ 
        const sq = Array(questions.contest.length).fill({
          isV:false,
          isA:false
        })
        setQuestionStatus(sq)
        console.log(questions)
    },[]);
//questionStatus
    function submit(){
      console.log("submitt")
    }
  return (
    <div>
      <ContestHeader name={questions.contestName} time={3} submit={submit}></ContestHeader>
      <div class='f '>
        <ContestQuestionNumber qStatus={qStatus} cQuestion={qNUm} setQ={setQnum} />
        <div >stright line</div>
        <div>
          <h1>c:{qNUm}</h1>
          <ContestQuestion  q={questions.contest[qNUm - 1]}></ContestQuestion>
          <button onClick={()=>setQnum(qNUm + 1)}>next</button>
        </div>
      </div>
    </div>
  )
}

export default TTpage