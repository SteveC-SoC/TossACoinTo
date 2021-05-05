
function Player( { playerChoice, playerSelect }) {
  
    return(
        <>
        {/* a radio button selection for player to choose heads or tails */}
            <form>
            <input type='radio' value='heads' checked={playerChoice === 'heads'} onChange={playerSelect} />Heads
            <input type='radio' value='tails' checked={playerChoice === 'tails'} onChange={playerSelect}/>Tails
            </form>
        </>
    )
}

export default Player; 