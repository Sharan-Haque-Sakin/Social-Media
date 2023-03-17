import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: whitesmoke no-repeat center center fixed;
  height: 100%;
`;
const MainPart = styled.div`
  margin: auto;
  display: flex;
  flex-direction: coloumn;
`;
const Posts = styled.div`
  background-color: white;
  background-color: white;
  width: 34rem;
  margin: auto;
  padding: 2rem;
  padding-top: 2rem;
  padding-top: 12px;
  border-radius: 17px;
  box-shadow: 2px -2px 22px -10px;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1064px) {
    width: 36rem;
  }
  @media (max-width: 510px) {
    width: 20rem;
  }
  @media (max-width: 652px) {
    width: 25rem;
  }
  @media (max-width: 468px) {
    width: 15rem;
  }
`;

const Info = styled.div`
  margin-left: 1rem;
`;

const UserName = styled.div`
  margin-left: 1rem;
  color: black;
`;

const Time = styled.div`
  color: grey;
  margin-left: 2rem;
`;

const Feeds = styled.div`
  color: black;
  margin-top: 1rem;
  font-width: lighter;
`;

const PostButton = styled.button``;
export { PostButton, Container, MainPart, Posts, UserName, Time, Feeds, Info };
