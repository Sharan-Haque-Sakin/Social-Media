import React from "react";
import MainPart from "./Components/HomePage/MainPart";
import Navbar from "./Navbar";
import { Container } from "./Styles/Pages";

const Home = (props) => {
  return (
    <Container>
      <Navbar />
      <MainPart />
    </Container>
  );
};

export default Home;
