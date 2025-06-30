
import './App.css'
import React, { createContext, use, useContext, useEffect, useRef, useState } from 'react';


const ThemeContext = createContext('light');

function App() {

    // Using useStates with button we can toggle the theme between 'light' and 'dark'.
    // ThemeContext.Provider allows us to provide a value to the context of the component that uses it.
  

    // App                               have a providet that sets the theme context value
    //  └── ComponentA                   
    //      └── ComponentB                
    //          └── ThemedComponent      Got the theme value from context

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (

    <div>
      <div className='global-component'>
        <GlobalComponent />
      </div>
        <ThemeContext.Provider value ={theme}>
      <div className='parent'>
           <h2>App (Parent)</h2>
        <button onClick={toggleTheme} className='toggle-theme'>
          Toggle Theme (Current: {theme})
        </button>
          <ComponentA />
        </div>
    </ThemeContext.Provider>

     <ThemeContext.Provider value = 'blue'>
      <div className='global-component'>
        <GlobalComponent />
      </div>
     </ThemeContext.Provider>
    </div>  

    

  );
}

function ComponentA() {
   return (
         <div className='child-a'>
           <h2>Component A (Child)</h2>
          <ComponentB  />
        </div>
  );
}

function ComponentB() {
  return (
        <div className='child-b'>
           <h3>Component B (Grand-Child)</h3>
          <ThemedComponent />
        </div>
  );
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return  <div className="ThemedComponent">
   <h4>ThemedComponent (Great Grand-Child)</h4>
      The Current theme is: {theme}
    </div>
}

function GlobalComponent() {
  const theme = useContext(ThemeContext);

  return  <div className="GlobalComponent">
   <h4>GlobalComponent (Outside Provider)</h4>
      The Current theme is: {theme}
    </div>
}



export default App
