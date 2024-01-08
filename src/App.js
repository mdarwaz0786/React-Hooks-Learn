import React from 'react';
import { createContext } from 'react';
import './App.css';
import UseState from './(1)useState/UseState.js';
import UseEffect from './(2)useEffect/UseEffect.js';
import ChildA from './(3)propsDrilling/ChildA.js';
import ChildX from './(4)useContext/ChildX.js';
import UseReducer from './(5)useReducer/UseReducer.js';
import UseRef from './(6)useRef/UseRef.js';
import UseMemo from './(7)useMemo/UseMemo.js';
import UseCallback from './(8)useCallback/UseCallback.js';


export const data = createContext();

const App = () => {
  const myName = "Md Arwaz";
  const myAge = 24;

  return (
    <div className='App'>
      <h2>useState Hook</h2>
      <UseState />
      <br />

      <h2>useEffect Hook</h2>
      <UseEffect />
      <br />

      <h2>Props Drilling</h2>
      <ChildA name={myName} age={myAge} />
      <br />

      <h2>useContext Hook</h2>
      <data.Provider value={{ name: myName, age: myAge }}>
        <ChildX />
      </data.Provider>
      <br />

      <h2>useReducer Hook</h2>
      <UseReducer />
      <br /><br />

      <h2>useRef Hook</h2>
      <UseRef />
      <br /><br />

      <h2>useMemo Hook</h2>
      <UseMemo />
      <br />

      <h2>useCallBack Hook</h2>
      <UseCallback />
      <br />
    </div>
  );
};

export default App;

// Finished.