import React, {  useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime <=0 ? 0:remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};


const options = [10, 20, 30, 40, 50];



function App() {
  const [time, settime]=useState("")
  const [key, setKey] = useState(0);


    

    
  const onClickReset = () => {
    setKey(prevKey => prevKey + 1)
    };
    const add = (e) => {
        settime(e.target.value)
        
  }
 

  
  return (
    <div className="App">
      <h1>
        <a
          href="https://www.reactlabs.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Labs
        </a>
        <br />
        ReactJS Assignment
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
           key={key}
           isPlaying
          duration={time}
          
          colors={["#0096c7"]}
        >
           {renderTime}
          </CountdownCircleTimer>
        <div style={{ display: "flex" }}>
             <select  onChange={add} >
               {options.map((opt,index) => (
                  <option  value={opt} key={index} >
                     {opt + " sec"}
                  </option>
                ))}
             </select>
              <button onClick={onClickReset}>Reset</button>
       </div>
        <h3>Can you get this reset button to work?</h3>
        <h4>
          The reset button should reset as per the time selected in the dropdown
        </h4>
      </div>
    </div>
  );
}

export default App;
