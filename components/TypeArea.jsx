import React from 'react'

const TypeArea = ({ started, onTyping }) => {
  const handleUserInput = (e) => onTyping(e.target.value);
  const input = started ?
    <input onChange={handleUserInput} /> :
    <input disabled="true" />

  return(
    <div>
      {input}
    </div>
  )
}
 export default TypeArea
