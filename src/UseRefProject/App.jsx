
import './App.css'
import React, { use, useEffect, useRef, useState } from 'react';

/* This is a simple React component that demonstrates the use of state and refs
 to manage counts. The component has two buttons: one to increment a state count
 and another to increment a ref count. The state count triggers a re-render,
 while the ref count does not, showcasing the difference between state and refs in React.
 */

function App() {

  const [stateCount, setStateCount] = useState(0);
  const inputRef = useRef(null);
  const inputRefNext = useRef(null);

  useEffect(() => {
    console.log('Component Rendered');
  }); 

  const focusInput = () => {
   inputRef.current.focus();
   inputRef.current.style.backgroundColor = 'lightblue';
  };

  const focusInputNext = () => {
    inputRefNext.current.focus();
    inputRefNext.current.style.backgroundColor = 'lightgreen';
  };

  const resetFocus = () => {
    inputRef.current.style.backgroundColor = 'white';
    inputRefNext.current.style.backgroundColor = 'white';
  }

  return (
    <>
    <h1>Input Ref Test</h1>
    <div className='app-wrapper'>
      <input ref={inputRef} type='text' placeholder='Focus me'></input>
    </div>
    <div className='button-wrapper'>
       <button onClick={focusInput}>
        Focus and Highlight
      </button>
    </div>
    <div className='app-wrapper'>
      <input ref={inputRefNext} type='text' placeholder='Focus me'></input>
    </div>
    <div className='button-wrapper'>
       <button onClick={focusInputNext}>
        Focus and Highlight
      </button>
    </div>
     <div className='button-wrapper'>
       <button onClick={resetFocus}>
        Reset
      </button>
    </div>
    </>
  );
}




export default App
