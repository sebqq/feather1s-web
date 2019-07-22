import React, { memo } from "react";
import Icon from "./Icon";
import ALL_ICONS from "../requireIconpack";
import styled from "styled-components";

const Container = styled.div`
  width: ${props => "70%"};
  display: grid !important;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  row-gap: 1rem;
  -webkit-column-gap: 1rem;
  grid-auto-rows: 2fr;
  column-gap: 1rem;
  margin: 0 auto;
  column-gap: 1.5rem;
`;

const OuterContainer = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const IconList = ({ search }) => {
  return (
    <OuterContainer>
      <Container>
        {ALL_ICONS.map(({ name, value }) => (
          <Icon key={name} name={name} path={value} search={search} size={25} />
        ))}
      </Container>
    </OuterContainer>
  );
};

export default memo(IconList);
