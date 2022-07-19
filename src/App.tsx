import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Timeline from './Pages/Timeline/Timeline'

function App() {
  return (
    // eslint-disable-next-line max-len
    <Router>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/timeline" element={<Timeline />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
