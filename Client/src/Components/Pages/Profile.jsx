import React from "react";
import Navbar from "./Navbar";
import { Container } from "./Styles/Pages";

export default function Profile() {
  return (
    <Container>
      <Navbar />
      <h1>Welcome to Profile!</h1>
    </Container>
  );
}
