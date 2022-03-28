import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";

const theme = createTheme();

export default function Signup() {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [usernameErr, setUsernameErr] = useState(false);
  const [idErr, setIdErr] = useState(false);
  const [pwErr, setPwErr] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4999/user/signup", {
        userId: userId,
        userName: username,
        password: userPw,
      })
      .then((res) => {
        setUsername("");
        setUserId("");
        setUserPw("");
        history.push("/login");
      })
      .catch((err) => {
        if (err) {
          console.log(err.response.data.msg);
          if (err.response.data.msg === "UserId is already singup") {
            setIdErr(true);
          } else if (err.response.data.msg === "UserName is already singup") {
            setUsernameErr(true);
          }
        }
      });
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
            회원 가입
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={idErr}
                  required
                  fullWidth
                  id="ID"
                  label="ID"
                  name="id"
                  autoComplete="id"
                  helperText={idErr ? "이미 존재하는 유저 ID 입니다." : ""}
                  onChange={(e) => {
                    setUserId(e.target.value);
                    setIdErr(false);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={usernameErr}
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username"
                  helperText={usernameErr ? "이미 존재하는 UserName 입니다." : ""}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUsernameErr(false);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  error={pwErr}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  helperText={pwErr ? "잘못된 비밀번호 입니다." : ""}
                  onChange={(e) => {
                    setUserPw(e.target.value);
                    setPwErr(false);
                  }}
                />
              </Grid>
            </Grid>
            <Button onClick={handleSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, padding: "10px 0" }}>
              회원 가입
            </Button>
            <Link href="/login" underline="none">
              <Button fullWidth variant="outlined" sx={{ padding: "10px 0" }}>
                로그인
              </Button>
            </Link>
          </Box>
        </Box>
        <Box sx={{ height: 200 }} />
      </Container>
    </ThemeProvider>
  );
}
