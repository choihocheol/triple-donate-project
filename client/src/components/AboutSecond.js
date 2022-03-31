import React from "react";
import { Divider } from "@mui/material";
import { BoldText, Container, ContentContainer, ContentText, MainContainer, SubContainer, SubText, TitleContainer, TitleText } from "./AboutElements";

export default function AboutSecond() {
  return (
    <Container>
      <MainContainer>
        <TitleContainer>
          <TitleText>TDT Token</TitleText>
        </TitleContainer>
        <Divider />
        <SubContainer>
          <SubText>・ TDT Token</SubText>
        </SubContainer>
        <ContentContainer>
          <ContentText>
            TDT Token이란 triple donate의 화폐라고 볼 수 있으며 주로 데이터를 받기 위한 프로젝트를 작성하는 용도로 사용됩니다.
            <br />
            <BoldText>데이터를 기부받기 위한 프로젝트의 남발을 우려</BoldText>해 TDT Token을 사용하도록 하였으며, 데이터를 기부받기 위해서는 다른 프로젝트에도 데이터를 기부하여
            소속감을 느낄 수 있었으면
            <br /> 좋겠습니다
          </ContentText>
        </ContentContainer>
        <SubContainer>
          <SubText>・ TDT Token을 얻는 방법</SubText>
        </SubContainer>
        <ContentContainer>
          <ContentText>
            <BoldText>✓ 최초의 회원가입</BoldText>
            <br />
            <BoldText>✓ 다른 사람의 게시글에 데이터를 기여했을 때</BoldText>
          </ContentText>
        </ContentContainer>
        <SubContainer>
          <SubText>・ TDT Token의 사용</SubText>
        </SubContainer>
        <ContentContainer>
          <ContentText>
            <BoldText>✓ 다른 사람들의 데이터를 기부받기 위한 프로젝트 작성</BoldText>
          </ContentText>
        </ContentContainer>
      </MainContainer>
    </Container>
  );
}
