
import './App.css'
//useState 
import { useState } from 'react'




function App() {
  
  // Initialize state variable 'count' with initial value 0 and a function 'setCount' to update it
  // useState is a React Hook that lets you add state to functional components
  const [count, setCount] = useState(0);  

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

   const reset = () => {
    setCount(0);
  }


  return (
    <>
    <div className='app-container'>
    <h1>Counter Value: {count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </div>
    </>
  )
}




export default App
