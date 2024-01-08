// useMemo Hook:
// The useMemo Hook returns a memoized value.
// Memoized value is a cache value so that it does not need to be recalculated or re-render.
// The useMemo Hook only runs when one of its dependencies update.
// This can improve performance.

import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(0);

  const isEven = useMemo(() => {
    console.log("useMemo called");
    return add % 2 === 0;
  }, [add]);

  return (
    <>
      <div>
        <p>Addition is: {isEven ? "Even" : "Odd"}</p>
        <p>Addition: {add}</p>
        <p>Subtraction: {minus}</p>
        <button onClick={() => setAdd(add + 1)}>Addition</button><br />
        <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
      </div>
    </>
  );
};

export default UseMemo;
