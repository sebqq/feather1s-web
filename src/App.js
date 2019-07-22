import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import IconList from "./components/IconList";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <SearchBar search={search} setSearch={setSearch} />
      </Header>
      <BodyComponent>
        <IconList search={search} />
        <Footer />
      </BodyComponent>
    </Container>
  );
};

const GlobalStyle = createGlobalStyle`  
  #root {
    height: 100vh;
  }
  body {
    margin: 0;
    font-family: 'Arima Madurai', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body,
  html {
    background-color: rgb(250, 250, 250);
    overflow-x: hidden;
    height: 100%
  }
`;

const Container = styled.div`
  display: flex !important;
  flex-direction: column;
  flex: 1;
`;

const BodyComponent = styled.div`
  z-index: 2;
`;

export default App;
