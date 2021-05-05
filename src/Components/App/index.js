import React, { useState } from "react";
import "./App.css";
import Coin from "../Coin";
import Player from "../Player";
import Purse from "../Purse";

function App() {
  //using State to keep track of the coin face
  const [coinFace, setcoinFace] = useState(" ");
  //does not like me having this as a const, not sure why, changing to let works but does this affect the useState
  let [purse, setpurse] = useState(2);

   /*in order to have the two radio buttons change (only one active at a time), I use a onChange function.
     I pass the event into the function 
    */
  const [playerChoice, setPlayerChoice] = useState(false);

  function playerSelect(e) {
    //this in conjunction with the checked= sets one to checked and the other to unchecked
    
    return setPlayerChoice(e.target.value);
  }

  function winner() {
    //
    setpurse(() => {
      if (playerChoice === coinFace) {
        setpurse(purse++);
        console.log('increase');
        
      } else {
        setpurse(purse--);
        console.log('decrease');
      }
     
    });
  }

    return (
    <div className="App">
      <h2>Pick</h2>
      <Player playerChoice={playerChoice} playerSelect={playerSelect}/>
      <Coin coinFace={coinFace} setcoinFace={setcoinFace} winner={winner}/>
      <Purse purse={purse} coinFace={coinFace} playerChoice={playerChoice}/>
    </div>
  );
}

export default App;
