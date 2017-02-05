import R from 'ramda'
import { TOGGLE_STARTED } from '../actions'

const initialState = {
  typing: {
    typed: []
  },
  stats: {
    started: false,
    seconds: 0
  }
}

const sharedReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_STARTED:
      const newState = getNewState(state.stats.started)
      return R.merge(
        state,
        newState
      )
    default:
      return state
  }
}

const getNewState = (started) => {
  if (started) {
    return {
      stats: {
        started: false
      }
    }
  } else {
    return {
      typing: {
        typed: []
      },
      stats: {
        started: true,
        seconds: 0
      }
    }
  }
}

export default sharedReducer

