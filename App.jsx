import React from 'react';
import { WordArea } from './components/WordArea.jsx';
import { TypeArea } from './components/TypeArea.jsx';
import { StatsArea } from './components/StatsArea.jsx';

export var App = React.createClass({
  getInitialState: function() {
    return (
      {
        words: "cat dog mouse".split(''),
        typed: [],
        accuracy: 0
      }
    );
  },

  handleTyping: function(e) {
    var typed = e.target.value.split('');
    var accuracy = this.computeAccuracy(this.state.words, typed);

    this.setState((prevState, props) => (
      {
        typed: typed,
        accuracy: accuracy
      }
    ));
  },
  
  computeAccuracy: function(words, typed) {
    var hits = typed.reduce((acc, current, index) => {
      if (current === words[index]) return acc + 1;
      else return acc;
    }, 0);
    return (hits / words.length) * 100;
  },

  render: function() {
    return (
      <div>
        <WordArea words={this.state.words} typed={this.state.typed}/>
        <TypeArea handler={this.handleTyping}/>
        <StatsArea accuracy={this.state.accuracy}/>
      </div>
    );
  }
});
