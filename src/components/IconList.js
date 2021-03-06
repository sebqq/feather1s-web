import React, { memo } from "react";
import Icon from "./Icon";
import { icons } from "../iconpack";
import useWindowSize from "@rehooks/window-size";
import styled from "styled-components";

const IconList = ({ search }) => {
  const { innerWidth } = useWindowSize();
  const width = innerWidth <= 992 ? "90%" : "70%";

  return (
    <OuterContainer>
      <Container width={width}>
        {icons.map(icon => (
          <Icon key={icon} name={icon} search={search} size={25} />
        ))}
      </Container>
    </OuterContainer>
  );
};

const Container = styled.div`
  max-width: ${props => props.width};
  display: grid !important;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  margin: 0 auto;
  grid-auto-rows: 0fr;
  row-gap: 1rem;
  column-gap: 1.5rem;
  -webkit-column-gap: 1.5rem;
`;

const OuterContainer = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export default memo(IconList);
