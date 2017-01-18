import React from 'react';

export var StatsArea = React.createClass({
  render: function() {
    return (
      <div>
        <p>
          <b>Words per minute:</b><span> {this.props.wpm.toPrecision(2)} words per minute</span>
        </p>
        <p>
          <b>Accuracy:</b><span> {this.props.accuracy.toPrecision(3)}%</span>
        </p>
      </div>
    );
  }
});
