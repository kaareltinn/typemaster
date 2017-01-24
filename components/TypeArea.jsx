import React from 'react';

export const TypeArea = (props) => {
  const handleUserInput = (e) => props.handler(e.target.value);

  return(
    <input
      onChange={handleUserInput}
    />
  )
}
