import React, { memo } from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Text>
        Origin <Link href={"https://feathericons.com/"}>Feather icon pack</Link>{" "}
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
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  flex-direction: column;
  width: 100%;
  background-color: rgb(250, 250, 250);
  padding: 30px;
  margin-top: 40px;
`;

const Link = styled.a`
  color: royalblue;
  text-decoration: none;
`;

const Text = styled.p`
  color: rgb(65, 50, 50);
  margin-top: 0;
  margin-bottom: 5px;
`;

const TextBold = styled.span`
  font-weight: 600;
`;

export default memo(Footer, () => true);
