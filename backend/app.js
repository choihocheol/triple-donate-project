const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

//ssesion
const passport = require('passport');
const session = require('express-session');
import { localsMiddleware, checkLoggedIn } from "./lib/middleware.js";

const app = express();

// DB 연결
const { PORT, MONGO_URI } = process.env;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Success mongo connect"))
  .catch((e) => console.error(e));

// client cors 설정
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//     methods: ["GET", "POST", "OPTIONS"],
//   })
// );

//session 설정
const MongoStore = require('connect-mongo');

const sessionMiddleWare = session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  //지속시간 2시간
  cookie: {
    maxAge: 2000 * 60 * 60 
  }, 
  store: MongoStore.create({mongoUrl: MONGO_URI})
});

app.use(sessionMiddleWare);
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);
app.use(checkLoggedIn);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.unsubscribe(bodyParser.json());

// Router 설정
const loginRouter = require("./routes/login-router");
const postRouter = require("./routes/post-router");

app.use("/user", loginRouter);
app.use("/post", postRouter);



module.exports = app.listen(PORT, () => {
  console.log(`Server is starting on ${PORT}`);
});