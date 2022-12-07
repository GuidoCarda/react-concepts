import React, { useState, useRef, useEffect } from "react";

const useBoolean = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = useRef({
    toggle: () => {
      setValue((prev) => !prev);
    },
    on: () => {
      setValue(true);
    },
    off: () => {
      setValue(false);
    },
  });

  return [value, updateValue.current];
};

const EjemploUseBoolean = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useBoolean(false);
  const [error, setError] = useBoolean(false);

  useEffect(() => {
    setLoading.on();

    setTimeout(() => {
      fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data);
          setList(data.data);
          setLoading.off();
        })
        .catch((error) => {
          console.log(error);
          setError.on();
          setLoading.off();
        });
    }, 2000);
  }, []);

  return (
    <div>
      <h1>
        {loading
          ? "cargando"
          : list.map((item) => {
              return <p>{item.first_name}</p>;
            })}
      </h1>
      {error ? <h1>Ops problemas</h1> : null}
    </div>
  );
};

export default EjemploUseBoolean;
