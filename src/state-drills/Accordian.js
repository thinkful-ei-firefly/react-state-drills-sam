import React from 'react';


//prop.sections = [{
//  title: string
//  content: string
// }]
class Accordian extends React.Component {

  static defaultProps = {
    sections: [{title:'title1',content:'content1'}, {title:'title2',content:'content2'}]
  }

  state = {
    openItem: null
  }

  handleClick = (itemKey) => {
    this.setState({openItem: itemKey})
    console.log(itemKey);
  }

  render() {
    return (
      <div className='accordian'>
        <ul>
          {this.props.sections.map((item, index) => { return (
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