import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button, Typography } from "@mui/material";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "#2c2c2c",
  fontWeight: 600,
};

const image = {
  height: 55,
  my: 4,
};

export default function IndexFourth() {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      offset: 150, // offset (in px) from the original trigger point
      delay: 30, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Box component="section" sx={{ display: "flex", bgcolor: "whitesmoke", overflow: "hidden" }}>
      <Container
        sx={{
          mt: 23,
          mb: 23,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14, fontWeight: 600, fontSize: "38px" }}>
          데이터 수집 단계
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box data-aos="fade-up" sx={item}>
              <Box sx={number}>1</Box>
              <Box component="img" src="http://temp20.zsol.co.kr/icon_img/document12.svg" alt="document" sx={image} />
              <Typography sx={{ mt: 3, fontSize: "26px", fontWeight: 400 }} variant="h5" align="center">
                필요한 프로젝트 제안
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box data-aos="fade-up" sx={item}>
              <Box sx={number}>2</Box>
              <Box component="img" src="http://temp20.zsol.co.kr/icon_img/transform.svg" alt="transform" sx={image} />
              <Typography sx={{ mt: 3, fontSize: "26px", fontWeight: 400 }} variant="h5" align="center">
                자신의 데이터를 이용해 프로젝트에 기여
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box data-aos="fade-up" sx={item}>
              <Box sx={number}>3</Box>
              <Box component="img" src="http://temp20.zsol.co.kr/icon_img/handshake09.svg" alt="handshake" sx={image} />
              <Typography sx={{ mt: 3, fontSize: "26px", fontWeight: 400 }} variant="h5" align="center">
                {"기여한 프로젝트에 따른 증명서와 토큰 발급 "}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Button size="large" variant="contained" component="a" sx={{ mt: 13 }}>
          시작하기
        </Button>
      </Container>
    </Box>
  );
}
