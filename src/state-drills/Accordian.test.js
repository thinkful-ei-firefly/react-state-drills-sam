import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Accordian from './Accordian';
import store from './Accordian.store.js';


describe ('Accordian testing', () => {
  it ('renders without crashing', () => {
    const div=document.createElement('div');
    ReactDOM.render(<Accordian sections={store}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it ('renders this UI as expected', () => {
    const tree=renderer.create(<Accordian sections={store}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it ('renders nothing with no props', () => {
    const tree=renderer.create(<Accordian />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});