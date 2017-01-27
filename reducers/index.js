const initialWords = "cat dog mouse".split('')
const initialTyped = []
const initialAccuracy = 0
const initialStartTime = new Date().valueOf()
const initialWpm = 0

const initialState = {
  words: initialWords,
  typed: initialTyped,
  startTime: initialStartTime,
}

const typingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TYPE_CHAR':
      const currentlyTyped = action.text.split('')
      return Object.assign({}, state, {
        typed: currentlyTyped
      })
    default:
      return state
  }
}

export const computeAccuracy = (words, typed) => {
  const hits = typed.reduce((acc, current, index) => {
    if (current === words[index]) return acc + 1;
    else return acc;
  }, 0);
  return (hits / words.length) * 100
}

export const computeWpm = (typed, startTime) => {
  const currentTime = new Date().valueOf()
  const minutes = ((currentTime - startTime) / 1000) / 60
  const words = typed.join('').split(' ')
  return words.length / minutes
}

export default typingReducer
