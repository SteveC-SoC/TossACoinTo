# TossACoinTo

## Idea  

Create a simple game where the user flips a coin, if they win, they keep the coin, if they loose they loose a coin.

## Why?
This was part of an idea back in a SoC project that we couldn't figure out how to code and style, it will be a good learning exercise/project 

## Progress  
Function created to display heads or tails on click of button ✔  
Move into seperate components ✔  
Set player move ✔  
Soreboard  
Decide if player wins, does selection match result - will need to pull state up higher so this can be accessed by all ✔  
Correct setState as this is currently on move behind  
animate the coin flip 🤔
CSS  

## Problems/Stuck
Radio buttons work slightly differently in React  
React docs shows that I cannot return false in React and to that I need to call preventDefault, however using this stopps both buttons showing checked, removed and code works without  

Running multiple functions onClick, this needs to be inside a seperate function that calls the functions you want ran onClick, see Button component  

There is a delay in the coinface being updated which is affecteing the results, it is one move behind  
Checked Stack and a call to setState isn't synchronous. It creates a "pending state transition." I need to explicitly pass the new input value as part of the event being raised

Coin flip - stuck on this, have found a tutorial for a card flip which I should be able to translate into this app  
setcoinFace(() => {
          if (Math.random() < 0.5) {  
            //this is duplicating the code 🤦‍♂️  
            // setcoinFace('heads')  
            return 'heads';  
Remove this!!! 