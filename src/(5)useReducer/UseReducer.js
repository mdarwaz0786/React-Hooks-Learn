// useReducer Hook:
// useReducer is a React Hook used for state management.
// This hook is a alternative Of useState hook:
// Preferable for complex state management logic.

// Syntax: const[state, dispatch] = useReducer(reducer, state);
// Reducer is a function accepts two parameter.
// newState = reducer(currentState, action);

import React, { useReducer } from "react";

const state = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default: return state;
  };
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, state);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </>
  );
};

export default UseReducer;
