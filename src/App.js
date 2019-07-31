import React from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import './App.css';
import Accordian from './state-drills/Accordian';


function App() {
  return (
    <div className="App">
      <HelloWorld who='reader' />
      <Bomb />
      <RouletteGun />
      <Accordian />
    </div>
  );
}

export default App;
