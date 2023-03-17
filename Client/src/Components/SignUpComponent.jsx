// External Imports

import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
// Initial Imports

import "./css/Auth.css";
import ShowErrors from "./Handlers/ShowErrors";
import bg from "../backgrounds/image.png";

const Container = styled.div`
  background: url(${bg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const SignUpComponent = (props) => {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);
  // msg

  const [Errors, setErrors] = useState({ errors: [] });

  // Declaration

  const navigate = useNavigate();
  function OnSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8000/user/auth/signup", {
      method: "POST",
      crossDomain: "true",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userName,
        email,
        password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        if (jsonData.success) {
          setSuccess(true);
          navigate("/");
        } else {
          setErrors(jsonData);
          setSuccess(false);
        }
      });
  }
  let msg;
  if (success) {
    msg = <p className="msg">Your account was successfully created</p>;
  } else {
    msg = null;
  }
  return (
    <Container>
      <div className="AuthContainer">
        {success && navigate("/")}
        <div className="Middle">
          <form onSubmit={(e) => OnSubmit(e)}>
            <h2>Create Account</h2>

            {msg}
            <input
              className="text"
              type="text"
              placeholder="User Name"
              onChange={(e) => setuserName(e.target.value)}
            />
            <ShowErrors param="userName" Error={Errors} />
            <input
              className="text"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <ShowErrors param="email" Error={Errors} />

            <input
              className="text"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <ShowErrors param="password" Error={Errors} />

            <input type="submit" id="submit" value="Create Account" />
            {/* <div className="warp"> */}
            {/* <p style={{ color: "white" }}>Already have an Account?</p> */}
            <Link to={`/`}>Login</Link>
            {/* </div> */}
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SignUpComponent;
