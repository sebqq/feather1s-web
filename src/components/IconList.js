import React, { memo } from "react";
import Icon from "./Icon";
import { icons } from "../iconpack";
import styled from "styled-components";

const IconList = ({ search }) => {
  return (
    <OuterContainer>
      <Container>
        {icons.map(icon => (
          <Icon key={icon} name={icon} search={search} size={25} />
        ))}
      </Container>
    </OuterContainer>
  );
};

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

export default memo(IconList);
