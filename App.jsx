import React from 'react';
import { connect } from 'react-redux';
import AppBox from './components/AppBox.jsx';
import { typeChar } from './actions';

//var App = React.createClass({
//  getInitialState: function() {
//    return (
//      {
//        words: "cat dog mouse".split(''),
//        typed: [],
//        accuracy: 0,
//        startTime: new Date().valueOf(),
//        wpm: 0
//      }
//    );
//  },
//
//  handleTyping: function(e) {
//    var typed = e.target.value.split('');
//    var accuracy = this.computeAccuracy(this.state.words, typed);
//    var wpm = this.computeWpm(this.state.typed, this.state.startTime);
//
//    this.setState((prevState, props) => (
//      {
//        typed: typed,
//        accuracy: accuracy,
//        wpm: wpm
//      }
//    ));
//  },
//  
//  computeAccuracy: function(words, typed) {
//    var hits = typed.reduce((acc, current, index) => {
//      if (current === words[index]) return acc + 1;
//      else return acc;
//    }, 0);
//    return (hits / words.length) * 100;
//  },
//
//  computeWpm: function(typed, startTime) {
//    var currentTime = new Date().valueOf();
//    var minutes = ((currentTime - startTime) / 1000) / 60;
//    var words = typed.join('').split(' ');
//    return words.length / minutes;
//  },
//
//  render: function() {
//    return (
//      <div>
//        <WordArea words={this.state.words} typed={this.state.typed}/>
//        <TypeArea handler={this.handleTyping}/>
//        <StatsArea wpm={this.state.wpm} accuracy={this.state.accuracy}/>
//      </div>
//    );
//  }
//});

//export { App as default };

const mapStateToProps = (state) => {
  return {
    words: state.words,
    typed: state.typed,
    accuracy: state.accuracy,
    startTime: state.startTime,
    wpm:  state.wpm
  }
}

const mapDispacthToProps = (dispatch) => {
  return {
    handleTyping: (char) => dispatch(typeChar(char))
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(AppBox);
