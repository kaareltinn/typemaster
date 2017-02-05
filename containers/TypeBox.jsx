import React from 'react'
import TypeArea from '../components/TypeArea.jsx'
import { typeChar } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  started: state.stats.started
})

const mapDispacthToProps = (dispatch) => ({
  onTyping: (text) => dispatch(typeChar(text))
})

export default connect(mapStateToProps, mapDispacthToProps)(TypeArea)
