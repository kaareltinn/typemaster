import React from 'react'
import Button from './Button.jsx'
import Timer from './Timer.jsx'

const StatsArea = (props) => {
  const button = props.started ? <Button text="Stop" onClick={props.onClick} /> : <Button text="Start" onClick={props.onClick}/>
    const timer = props.started ? <Timer seconds={props.seconds} tick={props.tick} /> : 0

  return (
    <div>
      <p>
        {button}
      </p>
      {timer}
      <p>
        <b>Words per minute:</b><span> {props.wpm.toPrecision(2)} words per minute</span>
      </p>
      <p>
        <b>Accuracy:</b><span> {props.accuracy.toPrecision(3)}%</span>
      </p>
    </div>
  );
}

export default StatsArea
