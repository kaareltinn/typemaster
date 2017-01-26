import React from 'react';

const TypeArea = (props) => {
  const handleUserInput = (e) => props.handler(e.target.value);

  return(
    <input
      onChange={handleUserInput}
    />
  )
}
 export default TypeArea
