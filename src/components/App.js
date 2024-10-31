import React from "react";
import NavBar from "./NavBar"; // Correct path to NavBar component
import Home from "./Home"; // Importing Home component
import About from "./About"; // Importing About component

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App; // Default export of the App component
