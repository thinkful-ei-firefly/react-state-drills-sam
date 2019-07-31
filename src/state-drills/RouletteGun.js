import React from 'react';

class RouletteGun extends React.Component {

  static defaultProps = {
    bulletInChamber: 8
  }

  state = {
    chamber: null,
    spinningTheChamber: false
  }

  handleTriggerPull = () => {
    this.setState({spinningTheChamber:true})
    this.timeout = setTimeout(() => {
      const chamberUsed = Math.ceil(Math.random() * 8);
      this.setState({chamber: chamberUsed, spinningTheChamber: false});
    }, 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  messageWriter() {
    if (this.state.spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    }
    return this.state.chamber===this.props.bulletInChamber ? 'BANG!!!!' : 'you\'re safe!'
  }

  render() {
    return (
      <div className='roulette-gun'>
        <p>{this.messageWriter()}</p>
        <button onClick={this.handleTriggerPull}>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;