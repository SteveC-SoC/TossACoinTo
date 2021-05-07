import appReducer, { initialState } from "./AppReducer";

test("testing initialState", () => {
  const currentState = initialState;
  const action = { type: "no action" };

  expect(appReducer(currentState, action)).toEqual(initialState);
});

test("test that user coin selection increases", () => {
  const currentState = initialState;
  const action = { type: "increment" };
  const expectedState = {...initialState, purse: 3}

  expect(appReducer(currentState, action)).toEqual(expectedState);
});

test("test that user coin selection decreases", () => {
    const currentState = initialState;
    const action = { type: "decrement" };
    const expectedState = {...initialState, purse: 1}
  
    expect(appReducer(currentState, action)).toEqual(expectedState);
  });
