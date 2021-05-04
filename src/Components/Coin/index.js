import React, { useState } from "react";

function Coin() {
  //using State to keep track of the coin face
  const [face, setFace] = useState(" ");
  // a onClick function to decide if the coin shows heads or tails
  function CoinToss() {
    //setFace depending on outcome of a Math.random, 50/50 chance
    setFace(() => {
      if (Math.random() < 0.5) {
        setFace("heads");
        console.log("heads");
      } else {
        setFace("tails");
        console.log("tails");
      }
    });
  }

  return (
    <div className="CoinFace">

      <h1>Flip a coin</h1>
      <div>
      {/* this will show the face depending on the result of the CoinToss
      while this works it looks rubbish */}
        <h2>{face}</h2>
      </div>

      <button id="btn" onClick={CoinToss}>
        Coin Toss
      </button>
    </div>
  );
}

export default Coin;
