import React, { useEffect, useState } from 'react'

function ContestList({ username, typeOfList }) {
  const [deletManagement, sDM] = useState(0);
  const [contestList, setContestList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9090/getList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        typeOfList: typeOfList
      })
    })
      .then(r => r.json())
      .then(r => {
        setContestList(r)
      });
  }, []);

  function deleteContest(username, contestId) {
    const newContest = contestList.filter(c => c._id !== contestId);
    setContestList(newContest);
    fetch("http://localhost:9090/deleteList", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        id: contestId,
        typeOf: "HOST"
      })
    })
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>username</th>
            <th>contest name </th>
            <th>no.of.questons</th>
            <th>no.of.p</th>
            <th>start time</th>
            <th>end time</th>
            <th>status</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {
            contestList.map((contest, inx) => {
              return (
                <tr key={contest._id}>
                  <td>{inx + 1}</td>
                  <td>{contest.username}</td>
                  <td>{contest.contestName}</td>
                  <td>{contest.questionStatus.length}</td>
                  <td>{contest.fetchCount | 0}</td>
                  <td>{contest.duration.start}</td>
                  <td>{contest.duration.end}</td>
                  <td>{((startTimeStr, endTimeStr) => {
                    const now = new Date();
                    const startTime = new Date(startTimeStr);
                    const endTime = new Date(endTimeStr);
                    if (now < startTime) {
                      return 'not started';
                    } else if (now >= startTime && now <= endTime) {
                      return 'ongoing';
                    } else {
                      return 'ended';
                    }
                  })(contest.duration.start, contest.duration.end)}</td>
                  <td>
                    <button onClick={() => deleteContest(contest.username, String(contest._id))} style={{ color: "red" }}>Delete</button>
                  </td>
                  <td style={{
                    color: 'blue',
                    cursor: "copy"
                  }}
                    onClick={() => {
                      navigator.clipboard.writeText(contest._id)
                      alert('id is coped');
                    }}>copyId</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ContestList