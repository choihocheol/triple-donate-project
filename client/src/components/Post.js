import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Button } from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
export const PostContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
`;
export const BtnContainer = styled.div`
  width: 20%;
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  padding-bottom: 8px;
  width: 60vh;
  /* height: 100%; */
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
      <PostContainer>
        <Link to={`/view/${seq}`}>
          <ListItem sx={{ m: 1 }} alignItems="flex-start">
            {/* <ListItem alignItems="flex-start"> */}
            <ListItemAvatar>
              <Avatar sx={{ width: 48, height: 48 }} r alt="Post" src={imgAddr} />
            </ListItemAvatar>
            <ListItemText
              primary={title}
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: "inline", width: "60%" }} component="span" variant="body2" color="text.primary"></Typography>
                  {desc}
                </React.Fragment>
              }
            />
          </ListItem>
        </Link>
      </PostContainer>
      {/* <Stack direction={{ xs: "column", sm: "row" }} spacing={1}> */}
      <BtnContainer>
        <Button size="small" onClick={clickDownload} variant="contained" endIcon={<ArrowCircleDownIcon />}>
          다운로드
        </Button>
      </BtnContainer>

      <Divider />
      {/* </ListItem> */}
    </Container>
  );
}
