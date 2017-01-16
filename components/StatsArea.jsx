import React from 'react';

export var StatsArea = React.createClass({
  render: function() {
    return (
      <div>
        <p>
          <b>Words per minute:</b><span> 0</span>
        </p>
        <p>
          <b>Accuracy:</b><span> {this.props.accuracy}%</span>
        </p>
      </div>
    );
  }
});
