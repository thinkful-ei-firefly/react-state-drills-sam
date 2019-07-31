import React from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import './App.css';
import Accordian from './state-drills/Accordian';
import store from './state-drills/Accordian.store.js';


function App() {
  return (
    <div className="App">
      <HelloWorld who='reader' />
      <Bomb />
      <RouletteGun />
      <Accordian sections={store}/>
    </div>
  );
}

export default App;
