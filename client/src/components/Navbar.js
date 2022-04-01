import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, NavIcon } from "./NavbarElements";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import axios from "axios";
import { logoutUser } from "../reducers/loginReducer";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  axios.defaults.withCredentials = true;
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    axios
      .post("http://localhost:4999/user/logout")
      .then((res) => {
        dispatch(logoutUser({}, false));
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goToMypage = () => {
    history.push("/mypage");
  };
  return (
    <>
      <Nav>
        <NavIcon to="/">
          <img src={require("../assets/logo_white.png")} alt="logo" height="120px" width="200px" />
        </NavIcon>
        <Bars />
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/swap">Swap</NavLink>
          <NavLink to="/post">Post</NavLink>
        </NavMenu>

        {data.login.isLogin ? (
          <>
            <>
              <Button
                onClick={handleClick}
                size="small"
                sx={{
                  ml: 2,
                  mr: 15,
                  color: "#e2e2e2",
                  textTransform: "none",
                }}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32, mr: 2 }} />
                <Typography sx={{ fontWeight: 600 }}>{data.login.name}</Typography>
                <MoreVertIcon color="white" sx={{ ml: 1 }} />
              </Button>
            </>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={goToMypage}>
                <ListItemIcon>
                  <PersonIcon fontSize="small" />
                </ListItemIcon>{" "}
                마이페이지
              </MenuItem>
              <MenuItem onClick={logoutHandler}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                로그아웃
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Button
            sx={{
              color: "#e2e2e2",
              mr: 15,
              backgroundColor: "none",
              borderColor: "#e2e2e2",
              "&:active": {
                boxShadow: "#e2e2e2",
                backgroundColor: "none",
                borderColor: "none",
              },
              "&:hover": {
                color: "#15cdfc",
                backgroundColor: "#2c2c2c",
                borderColor: "none",
                boxShadow: "#e2e2e2",
              },
            }}
            size="large"
            href="/login"
            startIcon={<LoginIcon />}
          >
            로그인
          </Button>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
