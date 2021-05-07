import Button from "../Button";

function Coin( { dispatch, coinFace, winner } ) {
  return (
    <div className="coinFace">
      <h1>Flip a coin</h1>
      <div className='coinInner'>
        {/* this will show the face depending on the result of the CoinToss
      while this works it looks rubbish */}
        <h2 className='coinFace'>{coinFace}</h2>
      {/* I am passing down setFace to the button as this is changed on the onClick */}
      <Button dispatch={dispatch} winner={winner}/>
      </div>
    </div>
  );
}

export default Coin;
