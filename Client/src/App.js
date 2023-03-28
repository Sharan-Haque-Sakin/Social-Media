// External Imports

import React from "react";
import { Routes, Route } from "react-router-dom";
// Intial Imports

import LoginComponent from "./Components/LoginComponent";
import Friends from "./Components/Pages/Friends";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";
import Post from "./Components/Pages/Post";
import Profile from "./Components/Pages/Profile";
import SignUpComponent from "./Components/SignUpComponent";
import { useNavigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import Navbar from "./Components/Pages/Navbar";

const WithNav = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const WithoutNav = () => {
  return <Outlet />;
};

const App = () => {
  const cookies = new Cookies();
  const check = cookies.get("authcookie");
  const navigate = useNavigate();
  useEffect(() => {
    if (!check) {
      navigate("/");
    } else {
      console.log("ok");
    }
  }, []);
  return (
    <div className="Container">
      {/* <Navbar /> */}
      <Routes>
        {/* <Route element={<WithoutNav />}> */}
        <Route path="/" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
        {/* </Route> */}

        <Route element={<WithNav />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/post" element={<Post />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
