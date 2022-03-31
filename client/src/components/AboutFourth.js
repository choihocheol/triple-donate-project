import React from "react";
import styled from "styled-components";
import LogoSrc from "../assets/logo_black.png";
import { Divider } from "@mui/material";
import { ContentContainer, ContentText, SubContainer, SubText, TitleContainer, TitleText, Us } from "./AboutElements";
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
const ListFont = styled.div`
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: 600;
`;
const DescFont = styled.div`
  margin: 15px 25px;
  font-size: 18px;
  font-weight: 600;
  color: #2c2c2c;
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
          <SubText>Blockchain</SubText>
        </SubContainer>
        <SubContainer>
          <UsContainer>
            <Us name="최호철" role="Blockchain" blogAddr="https://velog.io/@choihocheol" stack={["Solidity", "Caver.js"]} githubAddr="https://github.com/choihocheol" />{" "}
            <ContentContainer>
              <ListFont>구현 항목</ListFont>
              <DescFont>aaaa</DescFont>
            </ContentContainer>
          </UsContainer>
        </SubContainer>
        <SubContainer>
          <SubText>Front-End</SubText>
        </SubContainer>
        <SubContainer>
          <UsContainer>
            <Us
              name="이민기"
              role="Frontend"
              blogAddr="https://velog.io/@moment_log"
              stack={["JavaScript", "React", "MUI", "StyledComponent"]}
              githubAddr="https://github.com/mingi3442"
            />
            <ContentContainer>
              <ListFont>구현 항목</ListFont>
              <DescFont>aaaa</DescFont>
            </ContentContainer>
          </UsContainer>
        </SubContainer>
        <SubContainer>
          <UsContainer>
            <Us
              name="신동주"
              role="Frontend"
              blogAddr="https://velog.io/@tls980824"
              stack={["JavaScript", "React", "MUI", "StyledComponent"]}
              githubAddr="https://github.com/djshinnn"
            />{" "}
            <ContentContainer>
              <ListFont>구현 항목</ListFont>
              <DescFont>aaaa</DescFont>
            </ContentContainer>
          </UsContainer>
        </SubContainer>

        <SubContainer>
          <SubText>Back-End</SubText>
        </SubContainer>
        <SubContainer>
          <UsContainer>
            <Us name="김신학" role="Backend" blogAddr="https://github.com/Colvet" stack={["Express", "MongoDB"]} githubAddr="https://github.com/Colvet" />{" "}
            <ContentContainer>
              <ListFont>구현 항목</ListFont>
              <DescFont>aaaa</DescFont>
            </ContentContainer>
          </UsContainer>
        </SubContainer>
      </MainContainer>
    </Container>
  );
}
