import React, { forwardRef, useRef } from "react";

const ForwardRef = () => {
  const inputFocus = useRef(null);

  const handleFocus = () => {
    inputFocus.current.focus();
  };

  return (
    <div>
      <MyInput ref={inputFocus} />
      <button onClick={handleFocus}>Focus my input</button>
    </div>
  );
};

//When we use forwardRef in a component we are opting to expose his dom nodes to another component
const MyInput = forwardRef((props, ref) => {
  return <input {...props} type="text" ref={ref} />;
});

export default ForwardRef;
