import React from "react";
import { memo } from "react";

const Child = ({ minus, myFunction }) => {
  console.log("Child Componenet Rendered");

  return (
    <>
      <p>Child Component</p>
      <p>Subtraction: {minus}</p>
      <button onClick={myFunction}>Subtraction</button>
    </>
  );
};

export default memo(Child);
