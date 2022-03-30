import React from "react";
import { Divider } from "@mui/material";
import { BoldText, Container, ContentContainer, ContentText, MainContainer, SubContainer, SubText, TitleContainer, TitleText } from "./AboutElements";

export default function AboutThird() {
  return (
    <Container>
      <MainContainer>
        <TitleContainer>
          <TitleText>NFT</TitleText>
        </TitleContainer>
        <Divider />
        <SubContainer>
          <SubText>・ NFT</SubText>
        </SubContainer>
        <ContentContainer>
          <ContentText>triple donate에서 데이터를 기부했을 때 프로젝트에서 배포하는 NFT를 받을 수 있습니다</ContentText>
        </ContentContainer>
        <SubContainer>
          <SubText>・ 프로젝트를 생성하는 사람</SubText>
        </SubContainer>
        <ContentContainer>
          <ContentText>
            TDT Token을 이용해 프로젝트를 생성하고, 다른 사람들에게 데이터를 가여 받을 수 있습니다
            <br />
            프로젝트를 생성할 때 대표 이미지를 받아 NFT가 생성되며
            <br /> 프로젝트에 데이터를 기부받은 사람에게 작은 답례를 위해 triple donate에서 준비하겠습니다.
          </ContentText>
        </ContentContainer>
        <SubContainer>
          <SubText>・ 데이터를 기부하는 사람</SubText>
        </SubContainer>
        <ContentContainer>
          <ContentText>
            데이터를 기부하는 사람은 프로젝트에서 발급한 NFT를 받을 수 있습니다.
            <br />
            자신이 기부한 데이터를 이용하는 프로젝트의 NFT는 더 나은 사회를 위한 사회에 기여하였다는 작은 증명서로써 참여자들의 데이터에 대한 작은 보상으로 지급됩니다.
          </ContentText>
        </ContentContainer>
      </MainContainer>
    </Container>
  );
}
