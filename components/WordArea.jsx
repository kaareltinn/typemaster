import React from 'react';

const WordArea = (props) => {
  return (
    <div>
      <p>
        {props.chars} 
      </p>
      <p>
        {props.typed} 
      </p>
    </div>
  );
}

export default WordArea
