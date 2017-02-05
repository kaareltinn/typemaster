import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.props.tick(),
      1000
    )
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  
  render() {
    return (
      <div>
        {this.props.seconds}
      </div>
    )
  }
}

export default Timer
