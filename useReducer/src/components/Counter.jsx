import React, { createContext, useContext, useReducer } from "react";

//Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const myContext = createContext(null);

const Points = () => {
  const state = useContext(myContext);
  return <h1>Points: {state.count}</h1>;
};

const Counter = () => {
  //Initial state for reducer
  const initialState = {
    count: 0,
  };

  //Reducer to change State
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          count: state.count + action.payload,
        };
      case DECREMENT:
        return {
          count: state.count - action.payload,
        };
      case RESET:
        return {
          count: 0,
        };

      default:
        return state;
    }
  };

  //Asign useReducer to state, reducer and dispatch actions
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <myContext.Provider value={state}>
      <div>
        <Points />
        <button onClick={() => dispatch({ type: INCREMENT, payload: 10 })}>
          Increse
        </button>
        <button onClick={() => dispatch({ type: DECREMENT, payload: 2 })}>
          Decrease
        </button>
        <button onClick={() => dispatch({ type: RESET })}>Reset</button>
      </div>
    </myContext.Provider>
  );
};

export default Counter;
