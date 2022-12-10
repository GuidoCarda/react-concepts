import { useState } from "react";
import "./App.css";
import EjemploUseBoolean from "./components/EjemploUseBoolean";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      {/* <EjemploUseBoolean texto={"prueba"} /> */}
      <TodoList />
    </div>
  );
}

export default App;
