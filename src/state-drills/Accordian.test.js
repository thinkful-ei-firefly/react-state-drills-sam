import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './Accordian';
import { exportAllDeclaration } from '@babel/types';

describe ('Accordian testing', () => {
  it ('renders without crashing', () => {
    const div=document.createElement('div');
    ReactDOM.render(<Accordian />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it ('renders this UI as expected', () => {
    const tree=renderer.create(<Accordian />).toJSON();
    exportAllDeclaration(tree).toMatchSnapshot();
  });
});