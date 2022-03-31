import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AboutFirst from "../components/AboutFirst";
import AboutSecond from "../components/AboutSecond";
import AboutThird from "../components/AboutThird";
import AboutFourth from "../components/AboutFourth";
import styled from "styled-components";
import LogoSrc from "../assets/logo_black.png";
const Container = styled.div`
  width: 100%;
  height: 100%;
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
// const Container = styled.div`
//   width: 100%;
//   height: 95vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Container hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {children}
    </Container>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function pannelProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function About() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={
        value === 3
          ? {
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              height: 2300,
            }
          : {
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              height: 1000,
            }
      }
    >
      <Tabs orientation="vertical" value={value} onChange={handleChange} aria-label="Vertical tabs example" sx={{ borderRight: 1, borderColor: "divider", pt: 8 }}>
        <Tab
          sx={{
            padding: "50px 70px",
            fontWeight: 600,
            fontSize: "18px",
            textTransform: "none",
            borderBottom: "0.5px solid rgba(0,0,0,0.3)",
            borderTop: "0.5px solid rgba(0,0,0,0.3)",
          }}
          label="3Donate"
          {...pannelProps(0)}
        />
        <Tab
          sx={{ padding: "50px 70px", fontWeight: 600, fontSize: "18px", textTransform: "none", borderBottom: "0.5px solid rgba(0,0,0,0.3)" }}
          label="TDT Token"
          {...pannelProps(1)}
        />
        <Tab sx={{ padding: "50px 70px", fontWeight: 600, fontSize: "18px", textTransform: "none", borderBottom: "0.5px solid rgba(0,0,0,0.3)" }} label="NFT" {...pannelProps(2)} />
        <Tab
          sx={{ padding: "50px 70px", fontWeight: 600, fontSize: "18px", textTransform: "none", borderBottom: "0.5px solid rgba(0,0,0,0.3)" }}
          label="About Us"
          {...pannelProps(3)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AboutFirst />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AboutSecond />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AboutThird />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AboutFourth />
      </TabPanel>
    </Box>
  );
}
