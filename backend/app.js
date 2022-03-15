require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");


const app = express();

// DB 연결
const { PORT, MONGO_URI } = process.env;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Success mongo connect"))
  .catch((e) => console.error(e));

// client
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//     methods: ["GET", "POST", "OPTIONS"],
//   })
// );

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