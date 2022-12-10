import React, { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>focus the input</button>
      </form>
    </div>
  );
};

export default InputFocus;
