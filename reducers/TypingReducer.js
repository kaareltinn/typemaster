import R from 'ramda'
import { TYPE_CHAR } from '../actions'

const initialWords = "cat dog mouse".split('')
const initialTyped = []
const initialStartTime = new Date().valueOf()

const initialState = {
  words: initialWords,
  typed: initialTyped,
  startTime: initialStartTime,
}

const typingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_CHAR:
      const currentlyTyped = action.text.split('')
      return R.merge(
        state, 
        {
          typed: currentlyTyped
        }
      )
    default:
      return state
  }
}

export default typingReducer
