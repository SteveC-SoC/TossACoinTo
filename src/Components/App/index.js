import React, { useReducer } from "react";
import "./App.css";
import Coin from "../Coin";
import Player from "../Player";
import Purse from "../Purse";
import appReducer, { initialState } from "./AppReducer";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function winner(coinFace, playerChoiceHeads) { 
     return coinFace === playerChoiceHeads ? () => dispatch({type: 'increment'}) : () => dispatch({type: 'decrement'});
}
  
  return (
    <div className="App">
      <h2>Pick</h2>
      <Player dispatch={dispatch} playerChoiceHeads={state.playerChoiceHeads} />
      <Coin dispatch={dispatch} coinFace={state.coinFace} winner={winner}/>
      <Purse purse={state.purse} coinFace={state.coinFace} playerChoiceHeads={state.playerChoiceHeads} dispatch={dispatch}/>
    </div>
  );
}

export default App;
