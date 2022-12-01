import { useState } from "react";

import Counter from "./components/Counter";

import "./App.css";
import LoginUseState from "./components/LoginUseState";
import LoginUseReducer from "./components/LoginUseReducer";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <LoginUseState /> */}
      <LoginUseReducer />
    </div>
  );
}

export default App;
