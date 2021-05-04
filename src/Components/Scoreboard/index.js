

function ScoreBoard({ coinFace, PlayerChoice }) {
   
        <div>
        {/* display the results here, have it confirm player move, CPU move and who won */}
        {if({coinFace} == {PlayerChoice}) {
            {return <p>You selected {coinFace}, result was {PlayerChoice}, you win!!</p>}
        } else {
           {return <p>You selected {coinFace}, result was {PlayerChoice}, you loose</p>}
        }
        </div>
    
}

export default ScoreBoard;