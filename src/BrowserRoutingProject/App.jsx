import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Team from './Team';
import NotFound from './NotFound';
import CurrentLocation from './CurrentLocation';
import Dashboard from './Dashboard';

//Routing enables navigation between different components or pages in a React application.
// Helps User Experience
// Component Separation
// URL Management

// Using 
// useLocation hook to display the current path in the app
// useNavigate hook to programmatically navigate between routes with button
// useSearchParams hook to read and manipulate query parameters in the URL


function App() {

  //how to do bold text in tailwind
  // write here :  

  return (
    <>
      <Router>
        <div className='min-h-screen w-full bg-gray-100 '>

          <nav className='bg-blue-600 p-4 w-full' >
            <ul className='flex justify-center space-x-6'>
              <li> <Link
                className='text-white text-2xl font-medium hover:text-blue-200 transition duration-300'
                to="/">Home</Link> </li>
              <li> <Link
                className='text-white text-2xl font-medium hover:text-blue-200 transition duration-300'
                to="/about">About</Link> </li>
              <li> <Link
                className='text-white text-2xl font-medium hover:text-blue-200 transition duration-300'
                to="/contact">Contact</Link> </li>
            </ul>
          </nav>

          <CurrentLocation />

          <div className='w-full  py-8'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} >
                <Route path="team" element={<Team />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
               <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

        </div>
      </Router>
    </>
  );
}

export default App;
