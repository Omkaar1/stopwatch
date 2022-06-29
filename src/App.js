import { useState } from "react";
import "./App.css";
import BtnDisplayComp from "./Components/BtnDisplayComp";
import DisplayComp from "./Components/DisplayComp";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMS = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMS === 100) {
      updatedS++;
      updatedMS = 0;
    }
    updatedMS++;
    return setTime({ ms: updatedMS, s: updatedS, m: updatedM, h: updatedH });
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };
  const resume = () => start();
  return (
    <>
      <div className="main-section">
        <div className="clock-holder">
          <div className="stopwatch">
            <DisplayComp time={time} />
            <BtnDisplayComp
              status={status}
              resume={resume}
              reset={reset}
              stop={stop}
              start={start}
            />
          </div>
        </div>
      </div>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "60px",
          marginTop: "-110px",
          marginBottom: "50px",
        }}
      >
        Stopwatch
      </h1>
      <div
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        Made with ❤️ By Omkar Londhe.
      </div>
    </>
  );
}

export default App;
