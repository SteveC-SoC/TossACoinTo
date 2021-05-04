import React, { useState } from "react";
import Button from '../Button';

function Coin() {
  //using State to keep track of the coin face
  const [face, setFace] = useState(" ");
  

  return (
    <div className="CoinFace">

      <h1>Flip a coin</h1>
      <div>
      {/* this will show the face depending on the result of the CoinToss
      while this works it looks rubbish */}
        <h2>{face}</h2>
      </div>
      {/* I am passing down setFace to the button as this is changed on the onClick */}
      <Button setFace={setFace}/>
     
    </div>
  );
}

export default Coin;
