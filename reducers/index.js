import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'
import typingReducer from './TypingReducer'
import statsReducer from './StatsReducer'
import sharedReducer from './SharedReducer'

const reducer = combineReducers({
  typing: typingReducer,
  stats: statsReducer
})


export const computeAccuracy = (words, typed) => {
  const hits = typed.reduce((acc, current, index) => {
    if (current === words[index]) return acc + 1;
    else return acc;
  }, 0);
  return (hits / words.length) * 100
}

export const computeWpm = (typed, seconds) => {
  if (seconds === 0 || typed.length === 0) return 0
  const minutes = seconds / 60
  const words = typed.join('').split(' ')
  return words.length / minutes
}

export default reducer
