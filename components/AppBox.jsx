import React from 'react';
import WordArea from './WordArea.jsx';
import TypeArea from './TypeArea.jsx';
import StatsArea from './StatsArea.jsx';
import { computeAccuracy, computeWpm  } from '../reducers';

const AppBox = (props) => {
  const accuracy = computeAccuracy(props.words, props.typed)
  const wpm = computeWpm(props.typed, props.startTime)

  return (
    <div>
      <WordArea words={props.words} typed={props.typed}/>
      <TypeArea handler={props.handleTyping}/>
      <StatsArea wpm={wpm} accuracy={accuracy}/>
    </div>
  )
}

export default AppBox
