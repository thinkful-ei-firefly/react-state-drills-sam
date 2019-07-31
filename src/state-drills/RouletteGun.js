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
  clearInterval(this.timeout)
}

  render() {
    return (
      <div className='roulette-gun'>
        <p>{this.state.spinningTheChamber ? 'spinning the chamber and pulling the trigger! ...' : (this.state.chamber===this.props.bulletInChamber ? 'BANG!!!!' : 'you\'re safe!')}</p>
        <button onClick={this.handleTriggerPull}>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;