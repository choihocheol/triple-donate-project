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
export const Container = styled.div`
  margin-left: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function AlignItemsList({ title, desc, imgAddr, seq }) {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const clickDownload = (e) => {
    e.preventDefault();
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
      <IconButton
        onClick={handleClick({
          vertical: "top",
          horizontal: "center",
        })}
        sx={{ alignSelf: "center" }}
        color="primary"
        aria-label="download"
      >
        <ArrowCircleDownIcon />
      </IconButton>{" "}
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} onClose={handleClose} message="다운로드기능은 준비중입니다." key={vertical + horizontal} />
      {/* </ListItem> */}
      <Divider />
    </Container>
  );
}
