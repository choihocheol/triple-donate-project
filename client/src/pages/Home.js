import React, { useEffect } from "react";
import IndexFirst from "../components/IndexFirst";
import IndexSecond from "../components/IndexSecond";
import IndexThird from "../components/IndexThird";
import IndexFourth from "../components/IndexFourth";
import axios from "axios";
import { logoutUser, setUser } from "../reducers/loginReducer";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
axios.defaults.withCredentials = true;
export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  useEffect(() => {
    axios
      .get("http://localhost:4999/user/mylist")
      .then((res) => {
        dispatch(setUser(res.data.userData.userName, true));
      })
      // .then(() => {
      //   console.log(data.login.name);
      // })

      .catch((err) => console.log(err));
  }, []);

  const logoutHandler = () => {
    axios
      .post("http://localhost:4999/user/logout")
      .then((res) => {
        dispatch(logoutUser({}, false));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <p>{data.login.isLogin ? data.login.name : "Not Login"}</p>
      <Button onClick={logoutHandler}>LogOut</Button> */}
      <IndexFirst />
      <IndexSecond />
      <IndexThird />
      <IndexFourth />
    </>
  );
}
