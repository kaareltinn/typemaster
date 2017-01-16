import React from 'react';

export var TypeArea = React.createClass({
  render: function() {
    return (
      <div>
        <input
          type="text"
          onChange={this.props.handler}
        />
      </div>
    );
  }
});
