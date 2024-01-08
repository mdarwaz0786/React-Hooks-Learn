// Hooks:
// Hooks allow functional components to have access to state, lifecycle Method and other React features.
// Hooks will not work in React class components.

// Rules for Hooks:
// Must be written inside functional component.
// Must be import in the top level of component.
// Hooks can not be conditional.

// useState() Hook:
// The React useState Hook allows us to track state in a our component.
// State generally refers to application data or properties that need to be tracked.
// The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects and any combination of these.

// useState accepts an initial state and returns two values:
// 1.The current state.
// 2.A function that updates the state.

// Example: const [color, setColor] = useState("");
// We are destructuring the returned values from useState.
// The first value, color is our current state.
// The second value, setColor is the function that is used to update our state.

import React, { useState } from 'react';

const UseState = () => {
    const [count, setCount] = useState(0);

    function updateCount() {
        setCount(count + 1);
    };

    return (
        <div>
            <p>button clicked {count} times.</p>
            <button onClick={updateCount}>Click me</button>
        </div>
    );
};

export default UseState;

// Finished.