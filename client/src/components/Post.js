import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { IconButton, Snackbar } from "@mui/material";
import Link from "@mui/material/Link";
import styled from "styled-components";
import axios from "axios";
export const Container = styled.div`
  margin-left: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
      <Link underline="none" sx={{ display: "felx", color: "black", flexDirection: "column", alignItems: "space-around" }} href={`/view/${seq}`}>
        <ListItem sx={{ m: 1, width: "10vh" }} alignItems="flex-start">
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
      <IconButton sx={{ alignSelf: "center" }} color="primary" aria-label="download" onClick={clickDownload}>
        <ArrowCircleDownIcon />
      </IconButton>{" "}
      {/* </ListItem> */}
      <Divider />
    </Container>
  );
}
