
import './App.css'
import React, { use, useEffect, useRef, useState } from 'react';


function App() {

  const theme = 'dark';

    // This is a simple React component that demonstrates how to pass props through multiple components
    //  - App  = has theme
    //    - ComponentA
    //      - ComponentB
    //        - ThemedComponent = need theme prop
  

  return (
        <div className='parent'>
           <h2>App (Parent)</h2>
          <ComponentA theme={theme} />
        </div>
  );
}

function ComponentA({ theme }) {
   return (
        <div className='child-a'>
           <h2>Component A (Child)</h2>
          <ComponentB theme={theme} />
        </div>
  );
}

function ComponentB({ theme }) {
  return (
        <div className='child-b'>
           <h3>Component B (Grand-Child)</h3>
          <ThemedComponent theme={theme} />
        </div>
  );
}

function ThemedComponent({ theme }) {
  return  <div className="ThemedComponent">
   <h4>ThemedComponent (Great Grand-Child)</h4>
      The Current theme is: {theme}
    </div>
}



export default App
