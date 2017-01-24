const initialWords = "cat dog mouse".split('')
const initialTyped = []
const initialAccuracy = 0
const initialStartTime = new Date().valueOf()
const initialWpm = 0

const initialState = {
  words: initialWords,
  typed: initialTyped,
  accuracy: initialAccuracy,
  startTime: initialStartTime,
  wpm: initialWpm
}

const typingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TYPE_CHAR':
      return Object.assign({}, state, {
        typed: action.text.split('')
      })
    default:
      return state
  }
}

export default typingReducer
