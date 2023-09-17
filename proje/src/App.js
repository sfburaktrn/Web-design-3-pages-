import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import IndexSlider from "./Components/Slider.js";
import Uyekayit from "./Components/Uyekayit.js";
import English from "./Components/English.js";

function App() {
  const [areButtonsVisible, setButtonsVisibility] = useState(true);

  const handleButtonClick = () => {
    setButtonsVisibility(false);
  };

  return (
    <Router>
      <div className="flex flex-col items-center justify-center h-screen">
        {areButtonsVisible && (
          <>
            <button
              className="btn border  bg-blue-500"
              onClick={handleButtonClick}
            >
              <Link to="/IndexSlider">Go to IndexSlider Page</Link>
            </button>
            <button
              className="btn border  bg-blue-500 mt-5"
              onClick={handleButtonClick}
            >
              <Link to="/Uyekayit">Go to Uyekayit Page</Link>
            </button>
            <button
              className="btn border  bg-blue-500 mt-5"
              onClick={handleButtonClick}
            >
              <Link to="/English">Go to English Page</Link>
            </button>
          </>
        )}
        <Routes>
          <Route path="/IndexSlider" element={<IndexSlider />} />
          <Route path="/Uyekayit" element={<Uyekayit />} />
          <Route path="/English" element={<English />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
