import React from 'react';
import { connect } from 'react-redux';
import AppBox from './components/AppBox.jsx';
import { typeChar } from './actions';

const mapStateToProps = (state) => {
  return {
    words: state.words,
    typed: state.typed,
    startTime: state.startTime
  }
}

const mapDispacthToProps = (dispatch) => {
  return {
    handleTyping: (char) => dispatch(typeChar(char))
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(AppBox);
