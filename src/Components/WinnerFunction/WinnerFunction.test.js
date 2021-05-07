

test("testing if dispatch is called", () => {
    const currentState = initialState;
    const action = jest.fn();
  
    expect(appReducer(currentState, action)).toEqual(initialState);
  });