import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends, FaUpload } from "react-icons/fa";
import ProfilePic from "../../ProfileImg/profile.png";

const Nav = styled.nav`
  padding-top: 1rem;
  display: flex;
  background-color: purple;
  color: white;
  padding-bottom: 1rem;
  text-align: center;
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

const Navbar = () => {
  return (
    <Nav>
      <p style={{ paddingLeft: "2rem" }}>Social Media</p>
      <ItemsContainer>
        <Items>
          <Link to={`/home`}>
            <AiFillHome className="NavIcons" />
          </Link>
        </Items>
        <Items>
          <Link to={`/profile`}>
            <img
              className="imgNav"
              style={{ borderRadius: "25px" }}
              src={ProfilePic}
              alt=""
            />
          </Link>
        </Items>
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
      </ItemsContainer>
    </Nav>
  );
};

export default Navbar;
