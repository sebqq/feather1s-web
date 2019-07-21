import React, { useCallback } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 800px;
  height: 54px;
  position: absolute;
  left: 50%;
  bottom: -27px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  box-shadow: 0px 0px 13px 1px rgba(100, 100, 100, 0.1);
  border: 0;
  border-radius: 20px;
  padding-left: 25px;
  padding-right: 25px;
  font-size: 1.2rem;
  ::focus {
    outline: none !important;
    box-shadow: 0px 0px 2px blue;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    font-style: italic;
  }
  :-ms-input-placeholder {
    font-style: italic;
  }
`;

const SearchBar = ({ search, setSearch }) => {
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

  return <Input onChange={handleChange} placeholder="Search for an icon..." />;
};

export default SearchBar;
