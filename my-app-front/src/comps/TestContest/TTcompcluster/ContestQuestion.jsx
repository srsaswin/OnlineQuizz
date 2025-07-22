import React from 'react'

function ContestQuestion({q}) {
  return (
    <div>
        <div>{q.question}</div>
        <div>
            {q.options.map((option,inx)=>[
                <button key={inx}>{option}</button>
            ])}
        </div>
    </div>
  )
}

export default ContestQuestion