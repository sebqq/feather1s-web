import React, { useMemo, useCallback } from "react";
import SVG from "react-inlinesvg";
import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
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
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;
  width: 100px;
  :hover {
    cursor: pointer;
  }
`;

const Text = styled.p`
  word-wrap: break-word;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 0;
`;

const SVGIcon = styled(SVG)`
  fill: yellow;
`;

const getDownloadUrl = name =>
  `https://github.com/sinodko/feather1s/raw/master/exported-svg/${name}.svg`;

const Icon = ({ name, path, search, size }) => {
  const icon = useMemo(() => {
    return (
      <SVGIcon key={size} src={path} width={size} height={size} cacheRequests />
    );
  }, [path, size]);

  const onPress = useCallback(() => {
    window.open(getDownloadUrl(name), "_blank");
  }, [name]);

  if (search && !name.includes(search)) {
    return null;
  }

  return (
    <Container href={`../assets/svg/${name}.svg`} download target="_blank">
      <IconContainer>{icon}</IconContainer>
      <Text>{name}</Text>
    </Container>
  );
};

export default Icon;
