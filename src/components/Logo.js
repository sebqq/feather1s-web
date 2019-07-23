import React, { memo } from "react";
import styled from "styled-components";
import logo from "./logo.png";
import useWindowSize from "@rehooks/window-size";

const IMAGE_WIDTH = 500;
const TEXT_WIDTH = 700;

const Logo = () => {
  const { innerWidth } = useWindowSize();
  const imageWidth =
    innerWidth <= IMAGE_WIDTH + 50 ? innerWidth - 50 : IMAGE_WIDTH;
  const textWidth =
    innerWidth <= TEXT_WIDTH + 50 ? innerWidth - 50 : TEXT_WIDTH;

  return (
    <Container>
      <img src={logo} alt="Logo" width={imageWidth} />
      <Text width={textWidth}>
        Feather1s is a super thin icon package based on Feather created by Cole
        Bemis. Our icon package is ready to be used in popular font generators
        like Fontello or IcoMoon!
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 35px;
`;

const Text = styled.p`
  margin-top: 90px;
  font-size: 1.4rem;
  font-weight: 200;
  text-align: center;
  color: ${props => props.theme.textColor};
  width: ${props => props.width}px;
`;

export default memo(Logo, () => true);
