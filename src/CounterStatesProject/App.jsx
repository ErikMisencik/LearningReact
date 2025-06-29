
import './App.css'
//useState 
import { useState } from 'react'




function App() {

  // Initialize state variable 'count' with initial value 0 and a function 'setCount' to update it
  // useState is a React Hook that lets you add state to functional components
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(3); // State for step increment/decrement  
  const [counters, setCounters] = useState([{id:1, value:0 }]); // State for a list of counters

  const increment = () => {
    setCount(count + step);
  }

  // Using functional updates to ensure the latest state is used
  // States are updated asynchronously, so using the previous state is safer in this case
  // This is especially useful when you need to update the state multiple times in a row
  const incrementTwice = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }

  const decrement = () => {
    setCount(count - step);
  }

  const reset = () => {
    setCount(0);
  }

  const addCounter = () => {
    setCounters([...counters, { id: counters.length + 1, value: 0 }]);
  }

  const incrementCounterFromList = (id) => {
    setCounters(counters.map(counter =>
      counter.id === id ? { ...counter, value: counter.value + 1 } : counter
    ));
  }
  const decrementCounterFromList = (id) => {
    setCounters(counters.map(counter =>
      counter.id === id ? { ...counter, value: counter.value - 1 } : counter
    ));
  }

  return (
    <>
      <div className="app-wrapper">
        <div className='app-container'>
          <h1>Counter Value: {count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={incrementTwice}>Increment Twice</button>
          <div>
            <input type='number' value={step} onChange={(e) => setStep(parseInt(e.target.value))} />
            <button onClick={reset}>Reset</button>
          </div>
        </div>
        <div className='app-container'>
          <h1>List of Counters</h1>
          <button onClick={addCounter}>Add Counter</button>
          <div className='counters-list'>
            {counters.map(counter => (
              <div key={counter.id} className='counter-item'>
                <h2>Counter {counter.id}: {counter.value}</h2>
                <div className='counter-buttons'>
                  <button onClick={() => incrementCounterFromList(counter.id)}>Increment</button>
                  <button onClick={() => decrementCounterFromList(counter.id)}>Decrement</button>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </>
  )
}




export default App
