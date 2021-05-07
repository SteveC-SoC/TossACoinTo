


function winner(coinFace, playerChoiceHeads) { 
    return coinFace === playerChoiceHeads ? () => dispatch({type: 'increment'}) : () => dispatch({type: 'decrement'});
}

export default winner