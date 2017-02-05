import React from 'react'
import { connect } from 'react-redux'
import WordArea from '../components/WordArea.jsx'

const mapStateToProps = (state) => ({
  words: state.typing.words,
  typed: state.typing.typed,
  chars: createChars(state.typing.words, state.typing.typed)
})

const createChars = (words, typed) => ( 
  words.map((char, i) => {
    if ( i + 1 > typed.length ) {
      return <span key={i}>{char}</span>
    } else {
      if (typed[i] === char) {
        return <span style={{color: 'green'}} key={i}>{char}</span>;
      } else {
        return <span style={{color: 'red'}} key={i}>{char}</span>;
      } 
    } 
  })
)

export default connect(mapStateToProps)(WordArea)
