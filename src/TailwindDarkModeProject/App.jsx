import './App.css';
import { useEffect, useState } from 'react';

// Theme toggle logic (dark/light)

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white dark:bg-gray-900 transition-colors duration-300 p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl px-6 py-8 shadow-xl ring-1 ring-gray-900/5 dark:ring-gray-700 max-w-md w-full">
        <div>
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
            <svg
              className="h-6 w-6 stroke-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </span>
        </div>
        <h3 className="text-gray-900 dark:text-white mt-5 text-xl font-semibold tracking-tight">
          Writes upside-down
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-base leading-relaxed">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>

      <button
        onClick={toggleTheme}
        className="px-5 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm font-medium transition"
      >
        Toggle Theme ({theme})
      </button>
    </div>
  );
}

export default App;
