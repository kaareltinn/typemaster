export const TYPE_CHAR = 'TYPE_CHAR'
export const TOGGLE_STARTED = 'TOGGLE_STARTED'
export const TICK = 'TICK'

export const typeChar = (text) => ({
  type: TYPE_CHAR,
  text
})

export const toggleStarted = () => ({
  type: TOGGLE_STARTED
})

export const tick = () => ({
  type: TICK
})

