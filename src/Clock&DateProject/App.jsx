
import './App.css'
import React, { useEffect, useState } from 'react';



function App() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format the time to HH:MM:SS 24-hour format EU
  const formattedTime = time.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  // Format the date to DD/MM/YYYY
  const formattedDate = time.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div>
      <div className="tracker-wrapper">
        <h1>Clock&Date</h1>
        <p>Current Time: {formattedTime}</p>
        <p>Current Date: {formattedDate}</p>
      </div>
    </div>
  );
}




export default App
