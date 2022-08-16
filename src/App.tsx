import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import Timeline from "./Pages/Timeline";
import Login from "./Pages/Login/index";

function App() {
  return (
    // eslint-disable-next-line max-len
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
