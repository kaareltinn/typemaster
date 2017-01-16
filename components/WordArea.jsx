import React from 'react';

export var WordArea = React.createClass({
  render: function() {
    const chars = this.props.words.map((char, i) => {
      if (this.props.typed[i] === char) {
        return <span style={{color: 'green'}} key={i}>{char}</span>;
      } else {
        return <span style={{color: 'red'}} key={i}>{char}</span>;
      }
    });
    return (
      <div>
        {chars} 
      </div>
    );
  }
});
