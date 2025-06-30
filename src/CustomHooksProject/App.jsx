
import './App.css'
import useCounter from './useCounter';

// Custom Hooks are functions that allow you to reuse stateful logic across components. 

function App() {

  const {count, incrementCount, decrementCount, resetCount} = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}> Reset</button>
    </div>  
  );
}




export default App
