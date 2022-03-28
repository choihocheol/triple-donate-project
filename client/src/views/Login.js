import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { setUser } from "../reducers/loginReducer";
import { useDispatch } from "react-redux";
const theme = createTheme();
axios.defaults.withCredentials = true;
export default function Login() {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [idErr, setIdErr] = useState(false);
  const [pwErr, setPwErr] = useState(false);
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4999/user/login", {
        userId: userId,
        password: userPw,
      })
      .then((res) => {
        console.log(res);
        dispatch(setUser(res.data));
        setUserId("");
        setUserPw("");
        history.push("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err) {
          if (err.response.data.msg === "UserId is not exist") {
            setIdErr(true);
          } else if (err.response.data.msg === "Password is not Correct") {
            setPwErr(true);
          }
        }
      });
  };
  const ExperienceLogin = (event) => {
    event.preventDefault();
    if (userId !== "testid") {
      setIdErr(true);
    } else if (userPw === "1234") {
      setPwErr(true);
    } else if (userId !== "testid" && userPw === "1234") {
      dispatch(setUser("testUser", true));
      setUserId("");
      setUserPw("");
      history.push("/");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 400, height: 125 }} alt="logo" src="logo.png" />
          <br />
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              error={idErr}
              margin="normal"
              required
              fullWidth
              id="email"
              label="User ID"
              autoFocus
              helperText={idErr ? "존재하지 않는 유저입니다" : ""}
              onChange={(e) => {
                setUserId(e.target.value);
                setIdErr(false);
              }}
            />
            <TextField
              error={pwErr}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              helperText={pwErr ? "잘못된 비밀번호 입니다." : ""}
              autoComplete="current-password"
              onChange={(e) => {
                setUserPw(e.target.value);
                setPwErr(false);
              }}
            />
            <Button type="submit" onClick={handleSubmit} fullWidth variant="contained" sx={{ mt: 3, mb: 2, padding: "10px 0" }}>
              로그인
            </Button>
            <Link href="/signup" underline="none">
              <Button fullWidth variant="outlined" sx={{ padding: "10px 0" }}>
                회원 가입
              </Button>
            </Link>
          </Box>
        </Box>
        <Box sx={{ height: 200 }} />
      </Container>
    </ThemeProvider>
  );
}
