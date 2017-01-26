import React from 'react';

const WordArea = (props) => {
  const chars = props.words.map((char, i) => {
    if ( i + 1 > props.typed.length ) {
      return <span key={i}>{char}</span>
    } else {
      if (props.typed[i] === char) {
        return <span style={{color: 'green'}} key={i}>{char}</span>;
      } else {
        return <span style={{color: 'red'}} key={i}>{char}</span>;
      } 
    } 
  });

  return (
    <div>
      <p>
        {chars} 
      </p>
      <p>
        {props.typed} 
      </p>
    </div>
  );
}

export default WordArea
