import React, { memo } from "react";
import { ReactComponent as GithubIcon } from "../icons/github.svg";
import useWindowSize from "@rehooks/window-size";
import styled from "styled-components";

const Header = () => {
  const { innerWidth } = useWindowSize();
  const isMobile = innerWidth <= 500 ? true : false;
  const isXs = innerWidth < 400 ? true : false;

  return (
    <Container>
      <List isMobile={isMobile} flex={1}>
        <ListItem isTitle>Feather1s</ListItem>
      </List>
      <List isMobile={isMobile} right flex={2}>
        <ListItem>
          <ListLink href="https://github.com/sinodko/feather1s" height={22}>
            <SVG width={20} height={20} />
            <ListText height={20}>GitHub</ListText>
          </ListLink>
        </ListItem>
        <ListItem hide={isXs}>
          <ListLink href="https://github.com/sinodko/react-native-feather1s">
            <ListText height={20}>React Native</ListText>
          </ListLink>
        </ListItem>
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const List = styled.ul`
  display: ${({ isMobile, hide }) => (hide && isMobile ? "none" : "flex")};
  flex: ${props => props.flex};
  justify-content: ${props => (props.right ? "flex-end" : "flex-start")};
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: ${props => (props.isMobile ? "5px" : "1em")};
  margin-inline-end: ${props => (props.isMobile ? "5px" : "1em")};
  padding-inline-start: ${props => (props.isMobile ? "5px" : "40px")};
  padding-inline-end: ${props => (props.isMobile ? "5px" : "40px")};
  align-items: center;
`;

const ListItem = styled.li`
  display: ${props => (props.hide ? "none" : "inline-block")};
  margin-left: 15px;
  margin-right: 15px;
  font-weight: ${props => (props.isTitle ? "bold" : "normal")};
  font-size: ${props => (props.isTitle ? "1.3" : "1")}rem;
`;

const SVG = styled(GithubIcon)`
  margin-right: 7px;
  flex: 1;
`;

const ListLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  :hover {
    color: royalblue;
    ${SVG} {
      fill: royalblue;
    }
  }
`;

const ListText = styled.span`
  flex: 1;
  height: ${props => props.height}px;
`;

export default memo(Header, () => true);
