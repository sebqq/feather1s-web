import React, { memo } from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Text>
        Origin <Link href={"https://feathericons.com/"}>Feather</Link> icon pack
        is created by <TextBold>Cole Bemis</TextBold>
      </Text>
      <Text>
        Feather1s are created by <TextBold>Sebastian Trebunak</TextBold>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex !important;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundColor};
  padding: 30px;
  margin-top: 40px;
`;

const Link = styled.a`
  color: ${props => props.theme.linkColor};
  text-decoration: none;
`;

const Text = styled.p`
  color: ${props => props.theme.textColor};
  margin-top: 0;
  margin-bottom: 5px;
`;

const TextBold = styled.span`
  font-weight: 600;
`;

export default memo(Footer, () => true);
