
import './App.css'
import { useState } from 'react';


function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <>
      <div className='app-wrapper' style={{ backgroundColor }}>
        <h1>Color Picker</h1>
        <div className='color-palette'>
          {colors.map((color, index) => (
            <div
              key={index}
              className='color-box'
              style={{ '--swatch-color': color }}
              onClick={() => handleColorChange(color)}
            >
            </div>
          ))}
        </div>
        <div className='custom-color-container'>
          <div className='custom-color'>
            <input
              type='color'
              value={backgroundColor}
              onChange={(e) => handleColorChange(e.target.value)}
            />
          </div>
        </div>

      </div>
    </>
  );
}




export default App
