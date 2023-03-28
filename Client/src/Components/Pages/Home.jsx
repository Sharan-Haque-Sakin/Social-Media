import React from "react";
import MainPart from "./Components/HomePage/MainPart";
import Navbar from "./Navbar";
import { Container } from "./Styles/Pages";

const Home = (props) => {
  // useEffect(() => {
  //   // console.log(cookies.get("authcookie"));
  //   if (!check) {
  //     // console.log("np");
  //     navigate("/");
  //   } else {
  //     console.log("ok");
  //   }
  // }, []);
  return (
    <Container>
      {/* <Navbar /> */}
      <MainPart />
    </Container>
  );
};

export default Home;
