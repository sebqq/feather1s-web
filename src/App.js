import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import IconList from "./components/IconList";
import globalTheme from "./theme";

const INITIAL_THEME = localStorage.getItem("theme") || "light";

const App = () => {
  const [search, setSearch] = useState("");
  const [gTheme, setGlobalTheme] = useState(INITIAL_THEME);

  return (
    <ThemeProvider theme={globalTheme[gTheme]}>
      <Container>
        <GlobalStyle />
        <Header gTheme={gTheme} setGlobalTheme={setGlobalTheme}>
          <SearchBar search={search} setSearch={setSearch} />
        </Header>
        <BodyComponent>
          <IconList search={search} />
          <Footer />
        </BodyComponent>
      </Container>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Arima+Madurai:200,400,700&display=swap');
  #root {
    height: 100vh;
  }
  body {
    margin: 0;
    font-family: 'Arima Madurai', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: scroll; /* has to be scroll, not auto */
    -webkit-overflow-scrolling: touch;
  }
  body,
  html {
    background-color: ${props => props.theme.backgroundColor};
    overflow-x: hidden;
    height: 100%;
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
