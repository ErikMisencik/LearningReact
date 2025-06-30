

import React, { createContext, use, useContext, useEffect, useRef, useState } from 'react';

// Custom Hooks are functions that allow you to reuse stateful logic across components. 

function useCounter(initialValue = 0) {

  const [count, setCount] = useState(initialValue);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  const resetCount = () => {
    setCount(initialValue);
    }

  return {count, incrementCount, decrementCount, resetCount};
}


export default useCounter