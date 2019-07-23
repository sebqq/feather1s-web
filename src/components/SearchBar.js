import React, { useCallback } from "react";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { ReactComponent as XIcon } from "../icons/x.svg";
import useWindowSize from "@rehooks/window-size";
import styled from "styled-components";

const WIDTH = 800;

const SearchBar = ({ search, setSearch }) => {
  const { innerWidth } = useWindowSize();
  const dynamicWidth = innerWidth <= WIDTH ? innerWidth - 50 : WIDTH;

  const handleChange = useCallback(
    event => {
      setSearch(event.target.value.toLowerCase());
    },
    [setSearch]
  );

  const resetSearch = useCallback(() => {
    setSearch("");
  }, [setSearch]);

  return (
    <Container width={dynamicWidth}>
      <Input
        onChange={handleChange}
        value={search}
        placeholder="Search for an icon..."
      />
      <StyledSearchIcon height={30} width={30} />
      <XOuterContainer>
        <XInnerContainer>
          <StyledXIcon height={20} width={20} onClick={resetSearch} />
        </XInnerContainer>
      </XOuterContainer>
    </Container>
  );
};

const Container = styled.div`
  width: ${props => props.width}px;
  height: 54px;
  margin-top: 60px;
  position: relative;
  align-self: center;
  display: flex !important;
  justify-content: center;
  align-items: center;
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  z-index: 10;
  fill: ${props => props.theme.textColor};
  height: 54px;
`;

const StyledXIcon = styled(XIcon)`
  fill: ${props => props.theme.textColor};
`;

const XOuterContainer = styled.div`
  position: absolute;
  display: flex !important;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 10px;
  z-index: 10;
  height: 54px;
  width: 54px;
`;

const XInnerContainer = styled.div`
  position: relative;
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  z-index: 11;
  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 16;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 13px 1px rgba(100, 100, 100, 0.1);
  border: 0;
  border-radius: 25px;
  background-color: ${props => props.theme.backgroundTint};
  color: ${props => props.theme.textColor};
  font-size: 1.2rem;
  z-index: 5;
  padding-left: 60px;
  padding-right: 60px;
  :focus {
    outline: none !important;
    box-shadow: 0px 0px 1px 1px royalblue;
  }
  ::placeholder {
    color: ${props => props.theme.textMuted};
  }
`;

export default SearchBar;
