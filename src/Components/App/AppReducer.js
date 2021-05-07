export const initialState = {
  purse: 2,
  coinFace: " ",
  playerChoiceHeads: " ",
};

function reducer(state, action) {
  switch (action.type) {
    case "playerHeads":
      console.log("player choses heads");
      return { ...state, playerChoiceHeads: "heads" };
    case "playerTails":
      console.log("player choses tails");
      return { ...state, playerChoiceHeads: "heads" };
    case "coinRand":
      if (Math.random() < 0.5) {
        return { ...state, coinFace: "heads" };
      } else {
        return { ...state, coinFace: "tails" };
      }
    case "increment":
      console.log("increase");
      return { ...state, purse: state.purse + 1 };
    case "decrement":
      console.log("decrease");
      return { ...state, purse: state.purse - 1 };
    default:
      return state;
  }
}

export default reducer;
