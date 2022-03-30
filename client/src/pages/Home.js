import React, { useEffect } from "react";
import IndexFirst from "../components/IndexFirst";
import IndexSecond from "../components/IndexSecond";
import IndexThird from "../components/IndexThird";
import IndexFourth from "../components/IndexFourth";
import axios from "axios";
import { setUser } from "../reducers/loginReducer";
import { useDispatch, useSelector } from "react-redux";

axios.defaults.withCredentials = true;
export default function Home() {
  const dispatch = useDispatch();
  useSelector((state) => state);

  useEffect(() => {
    axios
      .get("http://localhost:4999/user/mylist")
      .then((res) => {
        dispatch(setUser(res.data.userData.userName, true));
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <IndexFirst />
      <IndexSecond />
      <IndexThird />
      <IndexFourth />
    </>
  );
}
