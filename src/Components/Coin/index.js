import Button from "../Button";

function Coin( { coinFace, setcoinFace, winner } ) {
  return (
    <div className="CoinFace">
      <h1>Flip a coin</h1>
      <div>
        {/* this will show the face depending on the result of the CoinToss
      while this works it looks rubbish */}
        <h2>{coinFace}</h2>
      {/* I am passing down setFace to the button as this is changed on the onClick */}
      <Button setcoinFace={setcoinFace} coinFace={coinFace} winner={winner}/>
      </div>
    </div>
  );
}

export default Coin;
