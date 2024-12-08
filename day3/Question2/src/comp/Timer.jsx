/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [resume, setResume] = useState(false);

  let timerID;

  useEffect(() => {
    if (!resume) {
      timerID = setInterval(() => setSeconds(seconds + 1), 1000);
    } else {
      return clearInterval(timerID);
    }
  }, [seconds]);

  return (
    <div>
      <h1>Elapsed Time: {seconds} seconds</h1>
      <button onClick={() => setSeconds(0)}>Reset</button>
      <button onClick={() => setResume((res) => !res)}>Resume</button>
    </div>
  );
};

export default Timer;
