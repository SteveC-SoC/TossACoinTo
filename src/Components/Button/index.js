
// moved the Button to its own component
function Button ({ setFace }){

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


    return(
        <button id="btn" onClick={CoinToss}>
        Coin Toss
      </button>
    )
}

export default Button;