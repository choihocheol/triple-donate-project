import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { IconButton, Snackbar } from "@mui/material";
// import Link from "@mui/material/Link";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
`;
export const Container = styled.div`
  padding-bottom: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
  /* justify-content: space-between; */
`;

export default function AlignItemsList({ title, desc, imgAddr, seq }) {
  const clickDownload = (e) => {
    // e.preventDefault();
    axios({
      url: `http://localhost:4999/post/download/${seq}`,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.zip");
      document.body.appendChild(link);
      link.click();
    });
  };
  return (
    <Container>
      <Link to={`/view/${seq}`}>
        <ListItem sx={{ m: 1, width: "60vh" }} alignItems="flex-start">
          {/* <ListItem alignItems="flex-start"> */}
          <ListItemAvatar>
            <Avatar sx={{ width: 48, height: 48 }} r alt="Post" src={imgAddr} />
          </ListItemAvatar>
          <ListItemText
            primary={title}
            secondary={
              <React.Fragment>
                <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary"></Typography>
                {desc}
              </React.Fragment>
            }
          />
        </ListItem>
      </Link>
      <BtnContainer>
        <IconButton sx={{ alignSelf: "center" }} color="primary" aria-label="download" onClick={clickDownload}>
          <ArrowCircleDownIcon />
        </IconButton>
      </BtnContainer>
      <Divider />
      {/* </ListItem> */}
    </Container>
  );
}
