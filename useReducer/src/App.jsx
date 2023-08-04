import { useState } from "react";

import Counter from "./components/Counter";

import "./App.css";
import LoginUseState from "./components/LoginUseState";
import LoginUseReducer from "./components/LoginUseReducer";
import AppUseReducerContext from "./pages/app-useReducer-context";
import AppUseReducerCounter from "./pages/app-useReducer-counter";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <LoginUseState /> */}
      {/* <LoginUseReducer /> */}
      {/* <AppUseReducerContext /> */}
      <AppUseReducerCounter />
    </div>
  );
}

export default App;
