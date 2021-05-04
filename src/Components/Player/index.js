import { useState } from 'react';

function Player() {
    // using State to set the radio button, which start as false
    const [isTrue, setisTrue] = useState(false);

    /*in order to have the two radio buttons change (only one active at a time), I use a onChange function.
    React docs shows that I cannot return false in React and to that I need to call preventDefault
    I pass the event into the function 
    */
    function playerSelect(e) {
        //this in conjunction with the checked= sets one to checked and the other to unchecked
        return setisTrue(e.target.value);
    };

    return(
        <>
        {/* a radio button selection for player to choose heads or tails */}
            <form>
            <input type='radio' value='heads' checked={isTrue === 'heads'} onChange={playerSelect} />Heads
            <input type='radio' value='tails' checked={isTrue === 'tails'} onChange={playerSelect}/>Tails
            </form>
        </>
    )
}

export default Player;