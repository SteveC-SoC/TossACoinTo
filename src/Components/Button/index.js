// moved the Button to its own component
function Button( {dispatch, winner} ) {
  function CoinToss() {
    //setFace depending on outcome of a Math.random, 50/50 chance
      dispatch({type: 'coinRand'})
    }
  //this calls the two functions I want ran when button is clicked
  function runFunctions() {
    CoinToss();
    winner();
  }

  return <button onClick={runFunctions}>Coin Toss</button>;
}

export default Button;
