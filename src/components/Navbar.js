import React, { memo } from "react";
import SVGIcon from "react-inlinesvg";
import ALL_ICONS from "../requireIconpack";
import styled from "styled-components";

const GITHUB_ICON_PATH = ALL_ICONS.filter(({ name }) => name === "github")[0]
  .value;
console.log(GITHUB_ICON_PATH[0]);

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const List = styled.ul`
  display: flex;
  flex: 1;
  justify-content: ${props => (props.right ? "flex-end" : "flex-start")};
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 1em;
  margin-inline-end: 1em;
  padding-inline-start: 40px;
  padding-inline-end: 40px;
`;

const ListItem = styled.li`
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
  font-weight: ${props => (props.bold ? "bold" : "normal")};
`;

const ListLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  :hover {
    color: royalblue;
  }
  span {
    flex: 1;
    height: ${props => props.height}px;
  }
`;

const SVG = styled(SVGIcon)`
  margin-right: 7px;
  flex: 1;
`;

const Header = () => {
  return (
    <Container>
      <List>
        <ListItem bold>Feather1s</ListItem>
      </List>
      <List right>
        <ListItem>
          <ListLink href="https://github.com/sinodko/feather1s" height={22}>
            <SVG src={GITHUB_ICON_PATH} width={20} height={20} cacheRequests />
            <span>GitHub</span>
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="https://github.com/sinodko/react-native-feather1s">
            React Native
          </ListLink>
        </ListItem>
      </List>
    </Container>
  );
};

export default memo(Header, () => true);
