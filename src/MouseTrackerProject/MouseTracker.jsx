
import './App.css'
import { useEffect, useState } from 'react';


function MouseTracker() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  //useEffect for mouse position tracking
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

     // Force-hide cursor on mount
    document.body.style.cursor = 'none';
 
    // Cleanup function to remove the event listener
    // Because we try to avoid memory leaks and ensure that the event listener is removed when the component unmounts
    // If we had 2 pages then removeEventListener would be called when we switch pages
    // Preventing usage of tracking mouse position on a page that is not using this component
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      // Explicitly restore to default (not just '')
      document.body.style.cursor = 'default';
    } 
  }, []);


  return (
    <>
      <div className="info">
        <h1>Mouse Position</h1>
        <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
      </div>
      <div
        className="cursor-dot"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
    </>
  );
}


export default MouseTracker