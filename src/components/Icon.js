import React, { useMemo, useContext } from "react";
import { ThemeContext } from "styled-components";
import SVG from "react-inlinesvg";
import styled from "styled-components";

const Icon = ({ name, search, size }) => {
  const themeContext = useContext(ThemeContext);
  const path = useMemo(() => require(`../icons/${name}.svg`), [name]);
  const icon = useMemo(() => {
    return (
      <StyledSVG
        key={`${themeContext.textColor}`}
        src={path}
        width={size}
        height={size}
        cacheRequests
      />
    );
  }, [size, path, themeContext]);

  if (search && !name.includes(search)) {
    return null;
  }

  return (
    <Container href={path} download={`${name}.svg`} target="_blank">
      <IconContainer>{icon}</IconContainer>
      <Text>{name}</Text>
    </Container>
  );
};

const IconContainer = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 70px;
  background-color: ${props => props.theme.backgroundTint};
  box-shadow: ${props =>
    props.theme.name === "light"
      ? "0px 0px 13px 1px rgba(100, 100, 100, 0.1)"
      : "none"};
  margin: 0px;
  border-radius: 7px;
`;

const Text = styled.p`
  word-wrap: break-word;
  text-align: center;
  font-weight: 400;
  margin-top: 10px;
`;

const StyledSVG = styled(SVG)`
  fill: ${props => props.theme.textColor};
`;

const Container = styled.a`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 5px;
  color: ${props => props.theme.textColor};
  text-decoration: none;
  :hover {
    cursor: pointer;
    ${StyledSVG} {
      fill: ${props => props.theme.linkColor};
    }
    ${Text} {
      color: ${props => props.theme.linkColor};
    }
  }
`;

export default Icon;
