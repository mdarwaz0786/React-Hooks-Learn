// useCallback Hook:
// The useCallback and useMemo Hooks are similar.
// The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

import React, { useCallback, useState } from "react";
import Child from "./Child.js";

const UseCallback = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(0);

  const myFunction = useCallback(() => {
    console.log("useCallback called");
    setMinus(minus - 1);
  }, [minus]);

  return (
    <>
      <div>
        <Child minus={minus} myFunction={myFunction} />
        <p>Parent Component</p>
        <p>Addition: {add}</p>
        <button onClick={() => setAdd(add + 1)}>Addition</button>
      </div>
    </>
  );
};

export default UseCallback;
