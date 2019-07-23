import React, { useMemo } from "react";
import SVG from "react-inlinesvg";
import styled from "styled-components";

const Icon = ({ name, search, size }) => {
  const path = useMemo(() => require(`../icons/${name}.svg`), [name]);
  const icon = useMemo(() => {
    return (
      <SVG key={size} src={path} width={size} height={size} cacheRequests />
    );
  }, [size, path]);

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
  background-color: white;
  box-shadow: 0px 0px 13px 1px rgba(100, 100, 100, 0.1);
  margin: 0px;
  border-radius: 7px;
`;

const Container = styled.a`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 5px;
  color: black;
  text-decoration: none;
  :hover {
    cursor: pointer;
    svg {
      fill: royalblue;
    }
    p {
      color: royalblue;
    }
  }
`;

const Text = styled.p`
  word-wrap: break-word;
  text-align: center;
  font-weight: 400;
  margin-top: 10px;
`;

export default Icon;
