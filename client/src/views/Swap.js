import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import LogoSrc from "../assets/logo_black.png";
const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: center;
  &::after {
    width: 100%;
    height: 100%;
    content: "";
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

const ContentContainer = styled.div`
  margin-top: 35vh;
  width: 90%;
  display: flex;
  justify-content: center;
`;

export default function Swap() {
  return (
    <Container>
      <ContentContainer>
        <Typography sx={{ fontSize: "28px", fontWeight: 600 }}>Swap 페이지는 준비중입니다.</Typography>
      </ContentContainer>
    </Container>
  );
}
