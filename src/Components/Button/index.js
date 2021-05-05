
// moved the Button to its own component
function Button ( { coinFace, setcoinFace, winner } ){

    function CoinToss() {
        //setFace depending on outcome of a Math.random, 50/50 chance
        setcoinFace(() => {
          if (Math.random() < 0.5) {
            setcoinFace('heads')
            console.log({coinFace})
            
          } else {
            setcoinFace('tails')
            console.log({coinFace})
          }
         
        });
      }

     function runFunction(){
      CoinToss()
      winner()
     }


    return(
        <button onClick={runFunction}>
        Coin Toss
      </button>
    )
}

export default Button;