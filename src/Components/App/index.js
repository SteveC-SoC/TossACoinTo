import React, { useState } from 'react';
import './App.css';
import Coin from '../Coin';
import Player from '../Player';
import ScoreBoard from '../Scoreboard';

function App() {
  //using State to keep track of the coin face
  const [coinFace, setcoinFace] = useState(" ");
  // using State to set the radio button, which start as false
  const [PlayerChoice, setPlayerChoice] = useState(false);

  return (
    <div className="App">
      <Player setPlayerSelect={setPlayerChoice}/>
      <Coin coinFace={coinFace} setcoinFace={setcoinFace} PlayerChoice={PlayerChoice} setPlayerChoice={setPlayerChoice} />
      <ScoreBoard coinFace={coinFace} PlayerChoice={PlayerChoice}/>

      
    </div>
  );
}

export default App;
