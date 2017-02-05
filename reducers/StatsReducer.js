import R from 'ramda'
import { TICK, TOGGLE_STARTED } from '../actions'

const initialState = {
  started: false,
  seconds: 0
}

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_STARTED:
      const newState = getNewState(state.started)
      return R.merge(
        state, 
        newState
      )
    case TICK:
      return R.merge(
        state,
        {
          seconds: ++state.seconds
        }
      )
    default:
      return state
  }
}

const getNewState = (started) => {
  if (started) {
    return {
      started: false,
      seconds: 0
    }
  } else {
    return {
      started: true
    }
  }
}

export default statsReducer
