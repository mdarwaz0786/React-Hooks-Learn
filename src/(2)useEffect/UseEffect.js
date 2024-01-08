// useEffect():
// The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are fetching data, directly updating the DOM, subscriptions, timers and more.
// The useEffect hook takes two arguments: A function that contains the side effect code and an optional array of dependencies.

// Side Effect Function:
// Inside the side effect function, you define the code that should run as a side effect.

// Dependencies Array:
// The second argument of useEffect is an array of dependencies.
// It tells React to re-runs the effect when any of the dependencies changes.
// If the dependency array is empty, the effect runs only one time.

// Cleanup Function (Optional):
// If the side effect requires any cleanup like canceling subscriptions or removing event listeners, you can return a cleanup function.
// This cleanup function will be executed when the component unmount or when the dependencies change.

import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
    setCalculation(() => count + 1);
    return () => {
      console.log("cleanup function called");
    };
  }, [count]);

  return (
    <div>
      <p>Calculation: {calculation}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>click me</button>
    </div>
  );
};

export default UseEffect;


// Example: How to write cleanup function in data fetching from server.
// useEffect(() => {
//     const abortController = new AbortController();
//     const signal = abortController.signal;
//     const fetchData = async () => {
//         try {
//             const result = await fetch('API-URL', { signal });
//             const data = await result.json();
//             console.log(data);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     fetchData();
//     return () => {
//         abortController.abort();
//     };
// }, []);

// Finished.