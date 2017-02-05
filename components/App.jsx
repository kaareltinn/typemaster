import React from 'react';
import WordBox from '../containers/WordBox.jsx';
import TypeBox from '../containers/TypeBox.jsx';
import StatsBox from '../containers/StatsBox.jsx';
import { computeAccuracy, computeWpm  } from '../reducers';

const App = (props) => {
  return (
    <div>
      <WordBox />
      <TypeBox />
      <StatsBox />
    </div>
  )
}

export default App
