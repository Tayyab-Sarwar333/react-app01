import React, { useState } from "react";
import "./App.css"; // You can create this CSS file for styling

function App() {
  // Use the useState hook to manage the dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="container">
      <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <h1>Dark Mode / Light Mode Toggle</h1>
        <button  className="btn btn-primary my-3" onClick={toggleDarkMode}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;
