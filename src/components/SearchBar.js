import React, { useCallback } from "react";
import { ReactComponent as SearchIcon } from "/svg/search.svg";
import useWindowSize from "@rehooks/window-size";
import styled from "styled-components";

const WIDTH = 800;

const SearchBar = ({ search, setSearch }) => {
  const { innerWidth } = useWindowSize();
  const dynamicWidth = innerWidth <= WIDTH ? innerWidth - 50 : WIDTH;

  const handleChange = useCallback(
    event => {
      const { value } = event.target;

      if (value === "") {
        return setSearch(null);
      }

      setSearch(event.target.value);
    },
    [setSearch]
  );

  return (
    <Container width={dynamicWidth}>
      <Input onChange={handleChange} placeholder="Search for an icon..." />
      <Icon height={30} width={30} />
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

const Icon = styled(SearchIcon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  z-index: 10;
  height: 54px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 13px 1px rgba(100, 100, 100, 0.1);
  border: 0;
  border-radius: 20px;
  font-size: 1.2rem;
  z-index: 5;
  padding-left: 75px;
  padding-right: 60px;
  :focus {
    outline: none !important;
    box-shadow: 0px 0px 1px 1px royalblue;
  }
  ::placeholder {
  }
`;

export default SearchBar;
