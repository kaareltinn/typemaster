import React from 'react'
import { connect } from 'react-redux'
import StatsArea from '../components/StatsArea.jsx'
import { computeWpm, computeAccuracy } from '../reducers'
import { toggleStarted, tick } from '../actions'

const mapStateToProps = (state) => ({
  accuracy: computeAccuracy(state.typing.words, state.typing.typed),
  wpm: computeWpm(state.typing.typed, state.stats.seconds),
  started: state.stats.started,
  seconds: state.stats.seconds
})

const mapDispacthToProps = (dispatch) => ({
  onClick: () => dispatch(toggleStarted()),
  tick: () => dispatch(tick())
})

export default connect(mapStateToProps, mapDispacthToProps)(StatsArea)
