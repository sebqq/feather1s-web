import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 70px;
`;

const Header = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <h1>Feather1s Icon Pack</h1>
      <h3>thinner than a feather...</h3>
      {children}
    </Container>
  );
};

export default Header;
