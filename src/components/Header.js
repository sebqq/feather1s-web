import React from "react";
import Navbar from "./Navbar";
import MainButtons from "./MainButtons";
import styled from "styled-components";
import Logo from "./Logo";

const Container = styled.div`
  display: flex !important;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding-bottom: 70px;
`;

const Header = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Logo />
      <MainButtons />
      {children}
    </Container>
  );
};

export default Header;
