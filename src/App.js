import React from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import './App.css';


function App() {
  return (
    <div className="App">
      <HelloWorld who='reader' />
      <Bomb />
      <RouletteGun />
    </div>
  );
}

export default App;
