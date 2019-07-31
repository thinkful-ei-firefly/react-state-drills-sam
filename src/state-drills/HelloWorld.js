import React from 'react';

class HelloWorld extends React.Component {

  state = {
    who: this.props.who
  }

  render() {
    return (
      <div className='hello-world'>
        <p>Hello, {this.state.who}</p>
        <button onClick={() => this.setState({who: 'world!'})} className="world">World</button>
        <button onClick={() => this.setState({who: 'friend!'})} className="friend">Friend</button>
        <button onClick={() => this.setState({who: 'React!'})} className="react">React</button>
      </div>
    );
  }
}

export default HelloWorld;