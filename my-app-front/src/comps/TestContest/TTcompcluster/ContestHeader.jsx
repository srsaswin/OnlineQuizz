import React, { useEffect, useRef, useState } from 'react';

function ContestHeader({ name, time, submit }) {
  const [timer, setTimer] = useState(time);
  const intervalRef = useRef({ f: true }); // ref object with 'f' flag

  useEffect(() => {
    intervalRef.current = {
      ...intervalRef.current,
      id: setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current.id);
            if (intervalRef.current.f) {
              submit(); // only submit once
              intervalRef.current.f = false;
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000),
    };

    return () => {
      clearInterval(intervalRef.current.id);
    };
  }, [submit]);

  return (
    <div id="contestheader">
      <div id="contest-name">{name}</div>
      <div id="timer">{formatTime(timer)}</div>
    </div>
  );
}

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
}

export default ContestHeader;
