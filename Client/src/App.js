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
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useEffect } from "react";
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
      <Routes>
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/" element={<LoginComponent />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/post" element={<Post />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
