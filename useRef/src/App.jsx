import { useRef } from "react";
import "./App.css";
import Flushsync from "./components/Flushsync";
import ForwardRef from "./components/ForwardRef";
import InputFocus from "./components/InputFocus";
import ListOfRefs from "./components/ListOfRefs";

function App() {
  const myRef = useRef(null);

  return (
    <div className="App">
      <button onClick={() => myRef.current.scrollIntoView()}>test</button>
      <div className="test-div" ref={myRef}>
        Test
      </div>
      {/* <InputFocus /> */}
      {/* <ListOfRefs /> */}
      {/* <ForwardRef /> */}
      <Flushsync />
    </div>
  );
}

export default App;
