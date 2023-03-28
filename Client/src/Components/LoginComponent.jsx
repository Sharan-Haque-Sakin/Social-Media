import React, { useEffect, useState } from "react";

import Cookies from "universal-cookie";
import "./css/Auth.css";
import bg from "../backgrounds/image.png";

import { Link, useNavigate } from "react-router-dom";

// import { injectGlobalStyle } from "styled-components";
import styled from "styled-components";

const cookies = new Cookies();

const Container = styled.body`
  background: url(${bg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const LoginComponent = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState();
  const [passError, setPassError] = useState();

  const [success, setSucces] = useState(false);

  // Declaration

  const navigate = useNavigate();

  useEffect(() => {
    const checkCookies = cookies.get("authcookie");

    if (!checkCookies) {
      navigate("/");
    } else {
      navigate("/home");
    }
  });

  const OnSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/user/auth/login", {
      method: "POST",
      crossDomain: "true",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          cookies.set("authcookie", data.jwt, {
            expires: new Date(Date.now() + 2589000000),
            sameSite: "none",
            secure: "true",
          });
          setSucces(true);

          // }, 2000);
        } else {
          setSucces(false);
          if (data.params === "userName") {
            setNameError(data.msg);
          } else {
            setPassError(data.msg);
          }
        }
      });
  };

  return (
    <Container>
      <div className="AuthContainer">
        {success && navigate("/home")}

        <div className="Middle">
          <form action="#" onSubmit={(e) => OnSubmit(e)}>
            <h2>Login</h2>
            <input
              className="text"
              type="text"
              placeholder="User Name"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <p>{nameError}</p>
            <input
              className="text"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p>{passError}</p>

            <input type="submit" id="submit" value="Login" />

            {/* <p style={{ color: "white" }}>Don't have any account?</p> */}
            <Link to={`/signup`}>Create Account</Link>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default LoginComponent;
