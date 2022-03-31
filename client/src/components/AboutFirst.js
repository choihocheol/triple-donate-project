import React from "react";
import { Divider } from "@mui/material";
import { BoldText, Container, ContentContainer, ContentText, MainContainer, SubContainer, SubText, TitleContainer, TitleText } from "./AboutElements";

export default function AboutFirst() {
  return (
    <Container>
      <MainContainer>
        <TitleContainer>
          <TitleText>3 Donate</TitleText>
        </TitleContainer>
        <Divider />
        <SubContainer>
          <SubText>・ Triple Donate Project</SubText>
        </SubContainer>
        <br />
        <ContentContainer>
          <ContentText>
            Triple Donate는 말 그대로 <BoldText>Decentralization, Data, Donation </BoldText>각각의 의미를 순서대로 가지는 탈 중앙화 데이터 기부 플랫폼입니다.
            <br />
            <BoldText>데이터 기반의 연구</BoldText>를 하는 기관, 단체, 학생들은 triple donate를 통해 양질의 데이터를 얻고 데이터를 기부하는 유저는 triple donate를 통해 자신의 어떤
            개인 데이터가 어떤 곳에서 사용되는지 정확히 알 수 있습니다.
          </ContentText>
        </ContentContainer>
        <br />
        <br />
        <ContentContainer>
          <ContentText>
            대부분의 큰 플랫폼 기업들은 유저의 데이터를 취하고 서비스를 제공합니다.
            <br /> <BoldText>최근 4차 산업혁명 시대에 데이터의 중요성</BoldText>이 대두되면서 이러한 큰 플랫폼 기업들은 유저에게 데이터 수집에 대한 정확한 공지를 하지 않은 채
            과도한 양의 개인 데이터를 취하는 문제가 제기되고 있습니다. 또한 이러한 흐름에 따라 최근 데이터 기반의 연구가 활발히 진행 중입니다. 가장 큰 예로 인공지능이 이에
            해당합니다.
            <br /> 인공지능 연구의 시작은 <BoldText>양질의 데이터</BoldText>를 구하는 것입니다.
          </ContentText>
        </ContentContainer>
      </MainContainer>
    </Container>
  );
}
