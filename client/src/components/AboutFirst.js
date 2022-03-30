import React from "react";
import { Divider, Typography } from "@mui/material";
import { Container, ContentContainer, MainContainer, SubContainer, TitleContainer } from "./AboutElements";

export default function AboutFirst() {
  return (
    <Container>
      <MainContainer>
        <TitleContainer>
          <Typography sx={{ fontSize: "36px", fontWeight: 600 }}>3Donate</Typography>
        </TitleContainer>
        <Divider />
        <SubContainer>
          <Typography sx={{ fontSize: "28px", fontWeight: 600 }}>aaa</Typography>
        </SubContainer>
        <ContentContainer>
          <Typography sx={{ fontSize: "22px", fontWeight: 400 }}>aaa</Typography>
        </ContentContainer>
      </MainContainer>
    </Container>
  );
}
