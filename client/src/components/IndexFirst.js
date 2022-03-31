import React, { useEffect } from "react";
import styled from "styled-components";
import { Avatar, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Link from "@mui/material/Link";

const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MainContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  backgroundcolor: black;
`;
const LeftContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
const BtnContainer = styled.div`
  margin-top: 40px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const RightContainer = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const LogoContent = styled.div`
  width: 40vh;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); */
`;
const ContentContainer = styled.div`
  width: 75%;
`;
const MainContentFont = styled.div`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const ContentFont = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 5px;
`;
const BtnFont = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export default function IndexFirst() {
  useEffect(() => {
    axios.get("http://localhost:4999/").then((res) => {
      console.log(res);
    });
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      offset: 200, // offset (in px) from the original trigger point
      delay: 30, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out",
    });
  }, []);
  return (
    <Container>
      <MainContainer>
        <LeftContainer>
          <ContentContainer>
            <MainContentFont>
              당신의 데이터를 의미있는 <MainContentFont>프로젝트에 사용하세요!</MainContentFont>
            </MainContentFont>
            <ContentFont>많은 의미있는 프로젝트에서</ContentFont>
            <ContentFont>당신의 소중한 데이터를 필요로 합니다</ContentFont>
          </ContentContainer>
          <BtnContainer>
            <Link href="/signup" underline="none">
              <Button size="large" variant="contained">
                <BtnFont>시작하기</BtnFont>
              </Button>
            </Link>
            <Link href="/about" underline="none">
              <Button sx={{ ml: 5 }} size="large" variant="outlined">
                <BtnFont>더 알아보기</BtnFont>
              </Button>
            </Link>
          </BtnContainer>
        </LeftContainer>
        <RightContainer>
          <LogoContent data-aos="fade-left">
            <img alt="logo" src="signboard.png" />
          </LogoContent>
        </RightContainer>
        <div class="arrow arrow-first"></div>
        <div class="arrow arrow-second"></div>
      </MainContainer>
    </Container>
  );
}
