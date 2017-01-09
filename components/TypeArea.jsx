import React from 'react';

export var TypeArea = React.createClass({
  getInitialState: function() {
    return { wordsTyped: '' }
  },

  handleTyping: function(e) {
    this.setState({wordsTyped: e.target.value});
  },

  render: function() {
    return (
      <div>
        <input
          type="text"
          value={this.state.wordsTyped}
          onChange={this.handleTyping}
        />
      </div>
    );
  }
});
