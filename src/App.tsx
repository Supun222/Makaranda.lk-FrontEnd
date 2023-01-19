import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import Timeline from "./Pages/Timeline";
import Login from "./Pages/Login/index";
import SignUp from "./Pages/SignUp";
import AdminLogin from "./Pages/Admin/Login/index";
import Dashboard from "./Components/Dashboard";
import AdminHome from "./Pages/Admin/Home";
import Membership from "./Components/Membership";
import Profile from "./Pages/Profile";
import Posts from "./Components/Posts";
import Edit from "./Components/Membership/edit";
import Location from "./Components/Location";
import Categories from "./Components/Categories";
import VisitorReg from "./Pages/SignUp/visitor";
import ServiceProviderReg from "./Pages/SignUp/ServiceProvider";
import SecondServiceProviderReg from "./Pages/SignUp/SecondServiceProviderReg";
import WeddingPackages from "./Pages/WeddingPackages";
import FilterPackages from "./Components/FilterPackages";
import ProfileDetails from "./Pages/SignUp/ProfileDetails";
import FinalPage from "./Pages/SignUp/FinalPage";

function App() {
  return (
    // eslint-disable-next-line max-len
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />}>
          <Route path="/timeline/:category/:location" element={<Posts />} />
        </Route>
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/index=:id" element={<Posts />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<SignUp />}>
          <Route path="/user/visitor/new" element={<VisitorReg />} />
          <Route path="/user/Service/new" element={<ServiceProviderReg />} />
        </Route>
        <Route
          path="/user/Service/new/servicedetails"
          element={<SecondServiceProviderReg />}
        />
        <Route
          path="/user/Service/new/profiledetails"
          element={<ProfileDetails />}
        />
        <Route
          path="/user/Service/new/CoverPageDetails"
          element={<FinalPage />}
        />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminHome />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/membership" element={<Membership />} />
          <Route path="/admin/membership/:id" element={<Edit />} />
          <Route path="/admin/location" element={<Location />} />
          <Route path="/admin/category" element={<Categories />} />
        </Route>
        <Route path="/package_bundle" element={<WeddingPackages />}>
          <Route
            path="/package_bundle/:serviceType"
            element={<FilterPackages />}
          />
        </Route>
        {/* <Route
          path="/package/send"
          // eslint-disable-next-line no-undef
          element={<EmailDetails SelectedCard={ } />}
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
