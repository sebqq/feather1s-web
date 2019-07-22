import React from "react";
import styled from "styled-components";

const onPressDesignerPack = () => {
  window.location.href =
    "https://github.com/sinodko/feather1s/archive/master.zip";
};

const onPressTtf = () => {
  window.location.href =
    "https://github.com/sinodko/feather1s/raw/master/fontello-bundle/font/feather1s.ttf";
};

const onPressSvg = () => {
  window.location.href =
    "https://github.com/sinodko/feather1s/tree/master/exported-svg";
};

const MainButtons = () => {
  return (
    <Container>
      <ButtonSecondary onClick={onPressSvg}>Get SVGs</ButtonSecondary>
      <ButtonSecondary onClick={onPressTtf}>Get .ttf</ButtonSecondary>
      <ButtonPrimary onClick={onPressDesignerPack}>
        Get Designer pack
      </ButtonPrimary>
    </Container>
  );
};

const Container = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 55px;
`;

const Button = styled.button`
  padding: 16px 30px 12px 30px;
  margin: 10px;
  border-radius: 8px;
  border: 0px solid;
  font-family: "Arima Madurai", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.3rem;
  line-height: 2rem;
  font-weight: 200;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

const ButtonPrimary = styled(Button)`
  color: #eceff4;
  background: #434c5e;
  :hover {
    background: #4c566a;
  }
`;

const ButtonSecondary = styled(Button)`
  color: #3b4252;
  background: #e5e9f0;
  :hover {
    background: #eceff4;
  }
  :focus {
    outline: none;
    border: 1px solid #4c566a;
  }
`;

export default MainButtons;
