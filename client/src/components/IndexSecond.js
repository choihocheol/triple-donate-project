import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

export default function IndexSecond() {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 300,
      delay: 30,
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <Box component="section" sx={{ display: "flex", overflow: "hidden", bgcolor: "whitesmoke" }}>
      <Container sx={{ mt: 1, mb: 20, display: "flex", position: "relative", flexDirection: "column", alignItems: "center" }}>
        <Box
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1800"
          data-aos="fade-down"
          component="img"
          src="logo.png"
          alt="curvy lines"
          sx={{ width: 700, height: 650 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box data-aos="zoom-in" sx={item}>
              <Box component="img" src="http://temp20.zsol.co.kr/icon_img/semiconductor.svg" alt="semiconductor" sx={{ height: 55 }} />
              <Typography variant="h5" sx={{ my: 5, fontWeight: 600 }}>
                의미 있는 프로젝트
              </Typography>
              <Typography variant="p" sx={{ fontSize: "20px", fontWeight: 400 }}>
                {"더 나은 사회를 위한 프로젝트에 기여할 수 있습니다"} <br /> {"지금 바로 당신을 필요로하는  "} <br /> {" 프로젝트에 도움이 되어주세요!"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box data-aos="zoom-in" sx={item}>
              <Box component="img" src="http://temp20.zsol.co.kr/icon_img/resume03.svg" alt="resume" sx={{ height: 55 }} />
              <Typography variant="h5" sx={{ my: 5, fontWeight: 600 }}>
                필요한 데이터
              </Typography>
              <Typography variant="h5" sx={{ mb: 0.3, fontSize: "20px", fontWeight: 400 }}>
                {"당신의 프로젝트에 적합한"} <br /> {" 데이터를 수집하세요! "} <br /> {" 당신의 의미있는 프로젝트를"} <br /> {" 위하여 더욱 적합한 데이터를 "}
                <br />
                {" 모을 수 있습니다! "}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box data-aos="zoom-in" sx={item}>
              <Box component="img" src="http://temp20.zsol.co.kr/icon_img/care.svg" alt="care" sx={{ height: 55 }} />
              <Typography variant="h5" sx={{ my: 5, fontWeight: 600 }}>
                토큰과 NFT를 통한 보상
              </Typography>
              <Typography variant="h5" sx={{ mb: 0.3, fontSize: "20px", fontWeight: 400 }}>
                {"데이터를 기여한 후 토큰을 통해 보상을 받을 수 있습니다"} <br /> {"당신이 기여한 데이터를 통하여 세상은 조금 더 나은 세상이 될 것입니다."}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
