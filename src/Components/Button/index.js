
// moved the Button to its own component
function Button ({ setcoinFace }){

    function CoinToss() {
        //setFace depending on outcome of a Math.random, 50/50 chance
        setcoinFace(() => {
          if (Math.random() < 0.5) {
            setcoinFace("heads");
            console.log("heads");
          } else {
            setcoinFace("tails");
            console.log("tails");
          }
        });
      }


    return(
        <button onClick={CoinToss}>
        Coin Toss
      </button>
    )
}

export default Button;