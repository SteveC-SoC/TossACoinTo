
function Player( {dispatch, playerChoiceHeads}) {
  
    return(
        <>
        {/* a radio button selection for player to choose heads or tails */}
            <form>
            <input type='radio' value='heads' checked={playerChoiceHeads === "heads"} onChange={() => dispatch({type: 'playerHeads'})} />Heads
            <input type='radio' value='tails' checked={playerChoiceHeads === "tails"} onChange={() => dispatch({type: 'playerTails'})}/>Tails
            </form>
        </>
    )
}

export default Player; 