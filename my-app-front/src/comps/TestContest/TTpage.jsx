import React, { useEffect, useState } from 'react'

function TTpage() {

    const [contest,setContest] = useState(null);
    const [fetchStat,SetFetchState] = useState(true);

    useEffect(()=>{
        const testContest = localStorage.getItem('joinContestId');
        fetch(`http://localhost:9090/contest/${testContest}`)
        .then(r => r.json())
        .then(r => {
            setContest(r)
            console.log(r);
        })
    },[]);

  return (
    <div>{"hi"}</div>
  )
}

export default TTpage