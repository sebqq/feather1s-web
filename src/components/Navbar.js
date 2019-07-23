import React, { memo, useContext } from "react";
import { ThemeContext } from "styled-components";
import { ReactComponent as GithubIcon } from "../icons/github.svg";
import useWindowSize from "@rehooks/window-size";
import { Toggle } from "react-toggle-component";
import styled from "styled-components";

const Navbar = ({ gTheme, setGlobalTheme }) => {
  const themeContext = useContext(ThemeContext);
  const { innerWidth } = useWindowSize();
  const isMobile = innerWidth <= 725 ? true : false;
  const isXs = innerWidth < 400 ? true : false;

  const themeValue = gTheme === "dark";
  const handleSetTheme = event => {
    const newTheme = event.target.checked ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setGlobalTheme(newTheme);
  };

  return (
    <Container>
      <List isMobile={isMobile} flex={1} hide={isMobile}>
        <ListItem isTitle>Feather1s</ListItem>
      </List>
      <List isMobile={isMobile} right flex={6}>
        <ListItem>
          <ListLink href="https://github.com/sinodko/feather1s" height={22}>
            <SVG width={20} height={20} />
            <ListText height={20}>GitHub</ListText>
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="https://github.com/sinodko/react-native-feather1s">
            <ListText height={20}>{isXs ? "RN" : "React Native"}</ListText>
          </ListLink>
        </ListItem>
        <ListItem>
          Theme
          <StyledToggle
            backgroundColor={themeContext.backgroundColor}
            borderColor={themeContext.textColor}
            knobColor={themeContext.textColor}
            name="theme-toggler"
            checked={themeValue}
            onToggle={handleSetTheme}
          />
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
  align-items: flex-start;
  margin-top: 20px;
`;

const ListItem = styled.li`
  color: ${props => props.theme.textColor};
  display: ${props => (props.hide ? "none" : "inline-block")};
  margin-left: 15px;
  margin-right: 15px;
  font-weight: ${props => (props.isTitle ? "bold" : "normal")};
  font-size: ${props => (props.isTitle ? "1.3" : "1")}rem;
`;

const SVG = styled(GithubIcon)`
  fill: ${props => props.theme.textColor};
  margin-right: 7px;
  flex: 1;
`;

const ListLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.textColor};
  text-decoration: none;
  :hover {
    color: ${props => props.theme.linkColor};
    ${SVG} {
      fill: ${props => props.theme.linkColor};
    }
  }
`;

const ListText = styled.span`
  flex: 1;
  height: ${props => props.height}px;
`;

const StyledToggle = styled(Toggle)`
  margin-left: 10px;
`;

export default memo(Navbar);
