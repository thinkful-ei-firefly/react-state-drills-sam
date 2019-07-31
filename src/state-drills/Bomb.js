import React from 'react';

class Bomb extends React.Component {

  state = {
    count: 0
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({count: this.state.count+1});
      this.state.count>=8 && clearInterval(this.timer);
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  

  render() {
    return (
      <div className='bomb'>
        <p>{this.state.count>=8 ? 'Boom!!!!' : (this.state.count%2===0 ? 'tick' : 'tock')}</p>
      </div>
    );
  }
}

export default Bomb;