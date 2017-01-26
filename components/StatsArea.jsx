import React from 'react';

const StatsArea = (props) => {
  return (
    <div>
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
