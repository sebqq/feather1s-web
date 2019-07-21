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

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
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

const Icon = ({ name, path, search, size }) => {
  const icon = useMemo(() => {
    return (
      <SVGIcon key={size} src={path} width={size} height={size} cacheRequests />
    );
  }, [path, size]);

  if (search && !name.includes(search)) {
    return null;
  }

  return (
    <OuterContainer>
      <IconContainer>{icon}</IconContainer>
      <Text>{name}</Text>
    </OuterContainer>
  );
};

export default Icon;
