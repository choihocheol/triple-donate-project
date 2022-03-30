import React from "react";
import styled from "styled-components";
import LogoSrc from "../assets/logo_black.png";
import { Divider } from "@mui/material";
import { SubContainer, TitleContainer, TitleText, Us } from "./AboutElements";
const MainContainer = styled.div`
  width: 90%;
  height: 100%
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: center;
  &::after {
    width: 100%;
    height: 100%;
    background: url(${LogoSrc});
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.1;
  }
`;
const UsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default function AboutFourth() {
  return (
    <Container>
      <MainContainer>
        <TitleContainer>
          <TitleText>About Us</TitleText>
        </TitleContainer>
        <Divider />
        <SubContainer>
          <UsContainer>
            <Us
              name="최호철"
              role="Blockchain"
              blogAddr="https://velog.io/@tls980824"
              toDo="aaaaaaaa"
              githubAddr="
https://github.com/djshinnn"
            />
            <Us
              name="최호철"
              role="Blockchain"
              blogAddr="https://velog.io/@tls980824"
              toDo="aaaaaaaa"
              githubAddr="
https://github.com/djshinnn"
            />
          </UsContainer>
        </SubContainer>
        <SubContainer>
          <UsContainer>
            <Us
              name="최호철"
              role="Blockchain"
              blogAddr="https://velog.io/@tls980824"
              toDo="aaaaaaaa"
              githubAddr="
https://github.com/djshinnn"
            />
            <Us
              name="최호철"
              role="Blockchain"
              blogAddr="https://velog.io/@tls980824"
              toDo="aaaaaaaa"
              githubAddr="
https://github.com/djshinnn"
            />
          </UsContainer>
        </SubContainer>
      </MainContainer>
    </Container>
  );
}
