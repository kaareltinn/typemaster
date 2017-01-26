import React from 'react';
import WordArea from './WordArea.jsx';
import TypeArea from './TypeArea.jsx';
import StatsArea from './StatsArea.jsx';

const AppBox = (props) => {
  return (
    <div>
      <WordArea words={props.words} typed={props.typed}/>
      <TypeArea handler={props.handleTyping}/>
      <StatsArea wpm={props.wpm} accuracy={props.accuracy}/>
    </div>
  )
}

export default AppBox
