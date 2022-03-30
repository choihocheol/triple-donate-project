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
  justify-content: center;
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
            <Us name="최호철" role="Blockchain" blogAddr="https://velog.io/@choihocheol" toDo="aaaaaaaa" githubAddr="https://github.com/choihocheol" />
            <Us name="최호철" role="Blockchain" blogAddr="https://velog.io/@choihocheol" toDo="aaaaaaaa" githubAddr="https://github.com/choihocheol" />
          </UsContainer>
        </SubContainer>
        <SubContainer>
          <UsContainer>
            <Us name="최호철" role="Blockchain" blogAddr="https://velog.io/@choihocheol" toDo="aaaaaaaa" githubAddr="https://github.com/choihocheol" />
            <Us name="최호철" role="Blockchain" blogAddr="https://velog.io/@choihocheol" toDo="aaaaaaaa" githubAddr="https://github.com/choihocheol" />
          </UsContainer>
        </SubContainer>
      </MainContainer>
    </Container>
  );
}
