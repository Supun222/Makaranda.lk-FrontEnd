import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import Timeline from "./Pages/Timeline";
import Login from "./Pages/Login/index";
import SignUp from "./Pages/SignUp";
import AdminLogin from "./Pages/Admin/Login/index";
import Dashboard from "./Components/Dashboard";
import AdminHome from "./Pages/Admin/Home";
import Membership from "./Components/Membership";

function App() {
  return (
    // eslint-disable-next-line max-len
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account/new/service" element={<SignUp />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminHome />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/membership" element={<Membership />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
