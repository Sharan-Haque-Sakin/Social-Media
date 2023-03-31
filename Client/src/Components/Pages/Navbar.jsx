import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends, FaUpload } from "react-icons/fa";
// import ProfilePic from "../../ProfileImg/profile.png";
import Cookies from "universal-cookie";
const Nav = styled.nav`
  padding-top: 1rem;
  display: flex;
  padding-bottom: 1rem;
  text-align: center;
  margin-bottom: -16px;
  background-color: #f5f5f5;
  border-bottom: 1px solid grey;
`;

const ItemsContainer = styled.ul`
  display: flex;
  align-items: center;
  margin: auto;
`;

const Items = styled.li`
  padding-left: 2rem;
  list-style: none;
  text-align: center;
  a {
    text-decoration: none;
    transition: color 0.5s ease;
    &:hover {
      color: #d2d2d2;
    }
  }
`;

const NavLinks = styled.a`
  text-decoration: none;
  color: white;
`;
const cookies = new Cookies();
const Navbar = (props) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  function handleLogOut() {
    cookies.remove("authcookie");
    navigate("/");
  }

  const NavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "white",
      borderBottom: isActive ? "3px solid blue" : "none",
      stroke: isActive ? "blue" : "grey",
    };
  };

  useEffect(() => {
    fetch("https://mysocialmediabackend.onrender.com/posts/getname")
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        setName(jsonData.userName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Nav>
      {/* <img
        className="imgNav"
        style={{ borderRadius: "25px", marginLeft: "2rem" }}
        src={ProfilePic}
        alt=""
      /> */}
      <p style={{ paddingLeft: "2rem", color: "black" }}>{name}</p>

      <ItemsContainer>
        <Items>
          <NavLink to={`/home`} style={NavLinkStyle}>
            <AiFillHome className="NavIcons" />
          </NavLink>
        </Items>
        {/* <Items> */}
        {/* <NavLink to={`/profile`}> */}
        {/* </NavLink> */}
        {/* </Items> */}
        <Items>
          <NavLink to={`/friends`} style={NavLinkStyle}>
            <FaUserFriends className="NavIcons" />
          </NavLink>
        </Items>

        <Items>
          <NavLink to={`/post`} style={NavLinkStyle}>
            <FaUpload className="NavIcons" />
          </NavLink>
        </Items>

        <a
          onClick={() => handleLogOut()}
          style={{
            marginTop: "0rem",
            marginLeft: "2rem",
            cursor: "pointer",
            color: "blue",
          }}
        >
          Log Out
        </a>
      </ItemsContainer>
    </Nav>
  );
};

export default Navbar;
