import React, { useState, useCallback, useMemo } from "react";
import "./App.css";

// Ejecucion de componentes, creacion de componentes useMemo
// Ejecucion de funciones, creacion de funciones useCallback

function App() {
  const names = ["Martin", "Juan"];

  return (
    <div className="App">
      <GeneradorNombres names={names} />
    </div>
  );
}

function GeneradorNombres(props) {
  const { names } = props;

  const [name, setName] = useState(names[0]);

  const getName = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setName(names[index]);
  }, [names]);

  const clearName = useCallback(() => {
    setName(null);
  }, []);

  return (
    <div>
      <h1>Memoize de react con useMemo y useCallback</h1>

      {useMemo(() => {
        console.log("Renderizacion nombre");
        return (
          <>
            <h2>Nombre generado: {name ? name : "None"}</h2>
          </>
        );
      }, [name])}

      <Button label="Generar Nombre" click={getName} />
      <Button label="Limpiar Nombre" click={clearName} />
    </div>
  );
}

function WrappedButton(props) {
  console.log("renderizacion boton");
  return (
    <button
      onClick={() => {
        props.click();
      }}
    >
      {props.label}
    </button>
  );
}

const Button = React.memo(WrappedButton);

export default App;
