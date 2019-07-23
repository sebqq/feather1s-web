import React from "react";
import { ReactComponent as DownloadIcon } from "../icons/download.svg";
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
        <StyledDownloadIcon />
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
  border: none;
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
  color: ${props => props.theme.secondaryColor};
  background: ${props => props.theme.primaryColor};
  :hover {
    background: ${props => props.theme.primaryTint};
  }
`;

const StyledDownloadIcon = styled(DownloadIcon)`
  height: 17px;
  width: 17px;
  margin-right: 10px;
  fill: ${props => props.theme.secondaryColor};
`;

const ButtonSecondary = styled(Button)`
  color: ${props => props.theme.primaryColor};
  background: ${props => props.theme.secondaryColor};
  :hover {
    background: ${props => props.theme.secondaryTint};
  }
  :focus {
    outline: none;
    border: 1px solid #4c566a;
  }
`;

export default MainButtons;
