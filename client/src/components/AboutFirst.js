import React from "react";
import { Divider, Typography } from "@mui/material";
import { Container, ContentContainer, MainContainer, SubContainer, TitleContainer } from "./AboutElements";

export default function AboutFirst() {
  return (
    <Container>
      <MainContainer>
        <TitleContainer>
          <Typography sx={{ fontSize: "36px", fontWeight: 600 }}>3 Donate</Typography>
        </TitleContainer>
        <Divider />
        <SubContainer>
          <Typography sx={{ fontSize: "28px", fontWeight: 600 }}>Triple Donate Project</Typography>
        </SubContainer>
        <ContentContainer>
          <Typography sx={{ fontSize: "22px", fontWeight: 400 }}>
            Triple Donate는 말 그대로 decentralization, data, donate 각각의 의미를 순서대로 가지는 탈 중앙화 데이터 기부 플랫폼입니다. 데이터 기반의 연구를 하는 기관, 단체,
            학생들은 triple donate를 통해 양질의 데이터를 얻고 데이터를 기부하는 유저는 triple donate를 통해 자신의 어떤 개인 데이터가 어떤 곳에서 사용되는지 정확히 알 수 있습니다.
          </Typography>
        </ContentContainer>
        <SubContainer>
          <Typography sx={{ fontSize: "28px", fontWeight: 600 }}>Triple Donate Project</Typography>
        </SubContainer>
      </MainContainer>
    </Container>
  );
}
