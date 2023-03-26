import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends, FaUpload } from "react-icons/fa";
// import ProfilePic from "../../ProfileImg/profile.png";
import Cookies from "universal-cookie";
const Nav = styled.nav`
  padding-top: 1rem;
  display: flex;
  color: white;
  padding-bottom: 1rem;
  text-align: center;
  background-color: purple;
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
    color: white;
    text-decoration: none;
    transition: color 0.5s ease;
    &:hover {
      color: #d2d2d2;
    }
  }
`;

const Links = styled.a`
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

  useEffect(() => {
    fetch("/posts/getname")
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
      <p style={{ paddingLeft: "2rem" }}>{name}</p>

      <ItemsContainer>
        <Items>
          <Link to={`/home`}>
            <AiFillHome className="NavIcons" />
          </Link>
        </Items>
        {/* <Items> */}
        {/* <Link to={`/profile`}> */}
        {/* </Link> */}
        {/* </Items> */}
        <Items>
          <Link to={`/friends`}>
            <FaUserFriends className="NavIcons" />
          </Link>
        </Items>

        <Items>
          <Link to={`/post`}>
            <FaUpload className="NavIcons" />
          </Link>
        </Items>

        <a
          onClick={() => handleLogOut()}
          style={{ marginTop: "0rem", marginLeft: "2rem", cursor: "pointer" }}
        >
          Log Out
        </a>
      </ItemsContainer>
    </Nav>
  );
};

export default Navbar;
