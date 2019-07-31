import React from 'react';


//prop.sections = [{
//  title: string
//  content: string
// }]
class Accordian extends React.Component {

  state = {
    openItem: null
  }

  handleClick = (itemKey) => {
    this.setState({openItem: itemKey})
  }

  render() {
    return (
      <div className='accordian'>
        <ul>
          {this.props.sections && this.props.sections.map((item, index) => { return (
            <li key={index}>
              <button onClick={()=>this.handleClick(index)}>{item.title}</button>
              <p>{this.state.openItem===index && item.content}</p>
            </li>
          )})}
        </ul>
      </div>
    );
  }
}

export default Accordian;