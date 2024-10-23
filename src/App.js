import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Components/Home/Home"; // Adjust the path as needed


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} exact />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
