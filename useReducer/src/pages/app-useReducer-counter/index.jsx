import { createContext, useContext, useReducer } from "react";

const initialState = {
  count: 0,
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, count: state.count + 1 };
    }
    case DECREMENT: {
      return { ...state, count: state.count - 1 };
    }
    case RESET: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

const AppUseReducerCounter = () => {
  return (
    <div>
      <CounterProvider>
        <Counter />
        <Counter />
        <Counter />
      </CounterProvider>
    </div>
  );
};

const CounterContext = createContext(null);
const CounterDispatchContext = createContext(null);

const Counter = () => {
  const { count } = useCounter();
  const dispatch = useCounterDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch({ type: INCREMENT })}>increment</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>decrement</button>
      </div>
      <button onClick={() => dispatch({ type: RESET })}>restar</button>
    </div>
  );
};

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);
const useCounterDispatch = () => useContext(CounterDispatchContext);

export default AppUseReducerCounter;
