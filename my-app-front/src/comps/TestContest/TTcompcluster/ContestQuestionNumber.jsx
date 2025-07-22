import React from 'react'

const ContestQuestionNumber = ({qStatus,cQuestion,setQ}) => {
  return (
    <div>
        <div class ='f col'>
            {qStatus.map((v,inx)=>{
                return <button class='crl' key={inx} onClick={()=>setQ(inx + 1)}>
                    {inx + 1}
                </button>
            })}
        </div>
    </div>
  )
}

export default ContestQuestionNumber