// useRef Hook:
// It creates a mutable value which will not re-render the components when updated.
// It returns a object this object has a current property that holds a mutable value.
// It access a dom element directly and so we can manipulate dom.

import React, { useRef, useState, useEffect } from "react";

const UseRef = () => {
  const [data, setData] = useState("");
  const inputValue = useRef("");
  const count = useRef(0);

  const changeStyle = () => {
    inputValue.current.style.backgroundColor = "red";
    inputValue.current.style.color = "white";
    inputValue.current.focus();
  };

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input type="text" value={data} ref={inputValue} onChange={(event) => setData(event.target.value)} /><br />
      <p>Count Render {count.current} Times.</p>
      <button onClick={changeStyle}>change style</button>
    </>
  );
};

export default UseRef;


// Example: The useRef in react keeps track of previous state values since we can persist useRef values between renders.
// import { useState, useEffect, useRef } from "react";
// const UseRef = () => {
//   const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");
//   useEffect(() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);
//   return (
//     <>
//       <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
//       <p>Current Value: {inputValue}</p>
//       <p>Previous Value: {previousInputValue.current}</p>
//     </>
//   );
// };
// export default UseRef;

// Finished.