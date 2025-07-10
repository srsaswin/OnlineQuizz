import React, { useEffect, useRef, useState } from 'react';
import "./.css";

function ContestHeader({ name, time, submit }) {
  const intervalId = useRef(null);
  const hasSubmitted = useRef(false);
  const [timerCounter, setTimerCounter] = useState(time);

  function submitHere() {
    if (hasSubmitted.current) return;
    hasSubmitted.current = true;
    clearInterval(intervalId.current);
    submit();
  }

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTimerCounter((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId.current);
          if (!hasSubmitted.current) {
            hasSubmitted.current = true;
            submit();
          }
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [submit]);

  return (
    <div class='f'>
      <div class='f c cn'><h1>{name}</h1></div>
      <div class='f dd'>
        <h1>{formatTime(timerCounter)}</h1>
        <button onClick={submitHere}>submit</button>
      </div>
    </div>
  );
}

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
}

export default ContestHeader;
