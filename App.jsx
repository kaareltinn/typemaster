import React from 'react';
import { WordArea } from './components/WordArea.jsx';
import { TypeArea } from './components/TypeArea.jsx';
import { StatsArea } from './components/StatsArea.jsx';

export const App = () => {
  return (
    <div>
      <WordArea />
      <TypeArea />
      <StatsArea />
    </div>
  );
}
