import { useState } from "react";

const useList = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  const push = (element) => {
    setValue((prev) => [...prev, element]);
  };

  const remove = (index) => {
    console.log("entro");
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  };

  const isEmpty = () => {
    return value.length === 0;
  };

  return { value, setValue, push, remove, isEmpty };
};

export default useList;
